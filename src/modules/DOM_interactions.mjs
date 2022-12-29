/** 
 * This module contains all kinds of DOM interactions: inserting, deleting
 *     showing, hiding of tags, setting and deleting classes etc.
 * 
 * @module DOM_interactions
 */

import { projectStorage, getAllTodoObjectsArr, getElemObjectFromStorage } from "./storage.mjs";
import { format, isValid, isToday, addWeeks, isPast, compareAsc } from "date-fns";

const overlayElem = document.querySelector('.overlay');
const transparentOverlayElem = document.querySelector('.overlay.transparent');
const modalElem = overlayElem.querySelector('.modal');
const projectContainerElem = document.querySelector('.sidebar .projects');
const todoContainerElem = document.querySelector('.todo-container');
const mainHeaderPanelElem = document.querySelector('.header-panel');
const mainHeaderPanelTextElem = document.querySelector('.header-panel .text');
const defaultProjectElem = document.querySelector('.default-project');
const sortDropdownElem = document.querySelector('.sort-dropdown');

/** Header-panel elements to hide */
const editButtonElem = mainHeaderPanelElem.querySelector('.edit');
const elemsToHide = [editButtonElem];

export function showOverlay() {
  showElem(overlayElem);
}

export function hideOverlay() {
  hideElem(overlayElem);
}

export function showTransparentOverlay() {
  showElem(transparentOverlayElem);
}

export function hideTransparentOverlay() {
  hideElem(transparentOverlayElem);
}

export function switchToDefaultProject() {
  defaultProjectElem.click();
}

export function addClassesToModalElem(...classes) {
  modalElem.className = `modal ${classes.join(' ')}`;
}

export function resetModal() {
  modalElem.className = 'modal';
  modalElem.innerHTML = '';
}

export function resetTempFlags() {
  const editedElem = document.querySelector('.editStatus');

  if (editedElem) toggleEditStatus(editedElem);
}

export function refreshTodoContainer(todoObjectsArr, projectName) {
  resetTodoContainer();
  displayTodos(todoObjectsArr, projectName);
}

export function resetTodoContainer() {
  todoContainerElem.innerHTML = '';
}

export function insertModalHeader(headerText) {
  modalElem.insertAdjacentHTML('afterbegin',
  `<div class="modal-header">
    <h2>${headerText}</h2>
  </div>`);
}

export function insertModalFooter() {
  modalElem.insertAdjacentHTML('beforeend', 
  `<div class="modal-footer">
    <i class="material-symbols-outlined icon cancel clickable-elem" tabindex="0">cancel</i>
    <button type="submit" class="accept" form="modalForm">
      <i class="material-symbols-outlined icon clickable-elem" tabindex="-1">check_circle</i>
    </button>
  </div>`);
}

export function insertAddProjectForm() {
  modalElem.insertAdjacentHTML('beforeend',
  `<form action="" class="add-project custom-scrollbar" id="modalForm">
    <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" maxlength="120" spellcheck="false" required>
    </div>

    <div class="input-wrapper">
      <label for="color">Color</label>
      <input type="color" name="color" value="#9e9e9e" id="color" class="clickable-elem">
    </div>
  </form>`);
}

export function insertEditProjectForm({ name, color }) {
  modalElem.insertAdjacentHTML('beforeend',
  `<form action="" class="edit-project custom-scrollbar" id="modalForm">
    <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" name="name" value="${name}" id="name" maxlength="120" spellcheck="false" required>
    </div>

    <div class="input-wrapper">
      <label for="color">Color</label>
      <input type="color" name="color" value="${color}" id="color">
    </div>

    <button class="delete">Delete project</button>
  </form>`);
}

export function insertAddTodoForm() {
  modalElem.insertAdjacentHTML('beforeend',
  `<form action="" class="add-todo custom-scrollbar" id="modalForm">
    <div class="input-wrapper">
      <input type="text" name="name" maxlength="120" placeholder="Name" spellcheck="false" required>
      <textarea class="custom-scrollbar" name="description" cols="30" rows="4" placeholder="Description" spellcheck="false"></textarea>
    </div>

    <div class="input-wrapper" tabindex="-1">
      <label for="date">Due date</label>
      <input type="date" class="clickable-elem" name="date" id="date">
    </div>

    <div class="input-wrapper">
      <label for="selectProject">Project</label>
      <select name="selectProject" id="selectProject" class="clickable-elem">
        ${generateHTMLOptionsStringWithProjects()}
      </select>
    </div>
    
    <div class="input-wrapper priority">
      <label>Priority</label>
      <button type="button" class="low" data-priority="low">low</button>
      <button type="button" class="medium" data-priority="medium">medium</button>
      <button type="button" class="high" data-priority="high">high</button>
    </div>
  </form>`);
  
  const selectedProjectElem = getSelectedProject();
  const selectedProjectIndex = getElemIndex(selectedProjectElem);
  const defaultProjectIndex = getElemIndex(defaultProjectElem);

  if (
    selectedProjectElem.classList.contains('initial-project')
    && !selectedProjectElem.classList.contains('default-project')
  ) {
    setSelectedAttributeToOptionTag(defaultProjectIndex);
  } else {
    setSelectedAttributeToOptionTag(selectedProjectIndex);
  }
}

export function insertEditTodoForm({ name, description, dueDate, projectIndex, priority }) {
  modalElem.insertAdjacentHTML('beforeend',
  `<form action="" class="edit-todo custom-scrollbar" id="modalForm">
    <div class="input-wrapper">
      <input type="text" name="name" value="${name}" maxlength="120" placeholder="Name" spellcheck="false" required>
      <textarea name="description" cols="30" rows="4" placeholder="Description" spellcheck="false">${description}</textarea>
    </div>

    <div class="input-wrapper" tabindex="-1">
      <label for="date">Due date</label>
      <input type="date" class="clickable-elem" name="date" value="${formatDate(dueDate, 'yyyy-LL-dd')}" id="date">
    </div>

    <div class="input-wrapper">
      <label for="selectProject">Project</label>
      <select name="selectProject" id="selectProject" class="clickable-elem">
        ${generateHTMLOptionsStringWithProjects()}
      </select>
    </div>
    
    <div class="input-wrapper priority">
      <label>Priority</label>
      <button type="button" class="low" data-priority="low">low</button>
      <button type="button" class="medium" data-priority="medium">medium</button>
      <button type="button" class="high" data-priority="high">high</button>
    </div>

    <button class="delete">Delete todo</button>
  </form>`);

  setSelectedAttributeToOptionTag(projectIndex);
  setPriorityInModalForm(priority);
}

export function insertTodoDetailsElem({ name, description, dueDate, projectIndex, priority }) {
  const project = projectStorage.get(projectIndex);

  modalElem.insertAdjacentHTML('beforeend', 
  `<div class="details-container">
    <i class="material-symbols-outlined icon close clickable-elem">close</i>

    <div class="text-container">
      <h2 class="name">${name}</h2>

      <div class="description custom-scrollbar" data-placeholder="Description">${description}</div>
    </div>

    <div class="side-container">
      <div class="input-wrapper">
        <div class="bold">Due date</div>
        <div class="date">${formatDate(dueDate, `d MMMM yyyy`)}</div>
      </div>

      <div class="input-wrapper">
        <div class="bold">Project</div>
        <div class="media">
          <div class="color" style="background-color: ${project.getColor()};"></div>
          <div class="text">${project.getName()}</div>
        </div>
      </div>

      <div class="input-wrapper">
        <div class="bold">Priority</div>
        <div class="priority ${priority}">${priority}</div>
      </div>
    </div>
  </div>`);
}

export function insertProjectElems(...projectObjects) {
  const documentFragment = new DocumentFragment();

  for (let projectObj of projectObjects) {
    const container = document.createElement('div');
    const { name, color, index } = projectObj.destructurizePrivateFields();

    container.insertAdjacentHTML('beforeend', 
    `<li class="media-container clickable-elem project-elem" data-name="${name}" data-index="${index}">
      <div class="media">
        <div class="color" style="background-color: ${color};"></div>
        <div class="text">${name}</div>
      </div>
      <div class="counter hidden">0</div>
    </li>`);
    
    documentFragment.append(container.firstElementChild);
  }

  projectContainerElem.append(documentFragment);
}

export function insertTodoElems(...todoObjects) {
  const documentFragment = new DocumentFragment();

  for (let todoObj of todoObjects) {
    const container = document.createElement('div');
    const { 
      checked,
      name, 
      dueDate, 
      priority, 
      projectIndex, 
      index 
    } = todoObj.destructurizePrivateFields();

    container.insertAdjacentHTML('beforeend',
    `<div class="todo clickable-elem ${priority} ${checked ? "checked" : ""}" data-index="${index}" data-project-index="${projectIndex}" data-priority="${priority}">
      <input type="checkbox" class="clickable-elem" ${checked ? "checked" : ""}>
      <div class="name">${name}</div>
      <div class="date">${formatDate(dueDate, 'd MMM')}</div>
      <div class="media icons">
        <i class="material-symbols-outlined icon edit clickable-elem">edit</i>
        <i class="material-symbols-outlined icon delete clickable-elem">delete</i>
      </div>
    </div>`);

    documentFragment.append(container.firstElementChild);
  }

  todoContainerElem.append(documentFragment);
}

export function editProjectElem(projectElem, projectObj) {
  const projectName = projectObj.getName();
  const projectColor = projectObj.getColor();
  
  setProjectElemName(projectElem, projectName);
  setProjectElemText(projectElem, projectName);
  setProjectElemColor(projectElem, projectColor);
}

export function editTodoElem(todoElem, todoObj) {
  const todoName = todoObj.getName();
  const todoDueDate = todoObj.getDueDate();
  const todoPriority = todoObj.getPriority();

  setTodoElemName(todoElem, todoName);
  setTodoElemDueDate(todoElem, todoDueDate);
  setTodoElemPriority(todoElem, todoPriority);
}

export function removeElem(elem) {
  elem.remove();
}

/** Render non-default projects */
export function displayStandardProjects() {
  const projectObjectsArr = Array
    .from(projectStorage.values())
    .filter((val) => !val.isProjectInitial());
  
  insertProjectElems(...projectObjectsArr);
}

export function displayTodos(todoObjectsArr, projectName) {
  const allTodoObjectsArr = getAllTodoObjectsArr();

  /** if there are no todos to display */
  if (allTodoObjectsArr.length <= 0) return;
  
  switch(projectName) {
    case 'All': 
      insertTodoElems(...allTodoObjectsArr);

      break;
    case 'Today': {
      const todayTodoObjectsArr = allTodoObjectsArr.filter(todayFilter);

      insertTodoElems(...todayTodoObjectsArr);

      break;
    }
    case 'Next 7 days': {
      const weekTodoObjectsArr = allTodoObjectsArr.filter(weekFilter);

      insertTodoElems(...weekTodoObjectsArr);

      break;
    }
    case 'Archive': {
      const checkedTodoObjectsArr = allTodoObjectsArr.filter(archiveFilter);

      insertTodoElems(...checkedTodoObjectsArr);

      break;
    }
    default:
      insertTodoElems(...todoObjectsArr);
  }

  sortTodos();
}

export function sortTodos() {
  const selectedSortValue = document
    .querySelector('.dropdown-option.selected')
    .dataset
    .value;

  if (selectedSortValue === 'default') {
    const currentProjectElem = getSelectedProject();

    currentProjectElem.click();

    return;
  }

  [...todoContainerElem.children].sort((todo1, todo2) => {
    const todo1Project = projectStorage.get(getProjectIndexFromTodoElem(todo1));
    const todo2Project = projectStorage.get(getProjectIndexFromTodoElem(todo2));
    const todo1Obj = todo1Project
      .getTodoStorage()
      .get(getElemIndex(todo1))
      .destructurizePrivateFields();
    const todo2Obj = todo2Project
      .getTodoStorage()
      .get(getElemIndex(todo2))
      .destructurizePrivateFields();

    const getPriorityNumber = (priority) => {
      switch(priority) {
        case 'low': return 1;
        case 'medium': return 2;
        case 'high': return 3;
        default: return 4;
      }
    }

    switch(selectedSortValue) {
      case 'priority': {
        const todo1PriorityNum = getPriorityNumber(todo1Obj[selectedSortValue]);
        const todo2PriorityNum = getPriorityNumber(todo2Obj[selectedSortValue]);

        return todo1PriorityNum > todo2PriorityNum ? 1 : -1;
      }
      case 'dueDate': {
        if (!isValid(todo1Obj[selectedSortValue])) return 1;
        if (!isValid(todo2Obj[selectedSortValue])) return -1;
        
        return compareAsc(todo1Obj[selectedSortValue], todo2Obj[selectedSortValue]);
      }
      case 'checked':
        return todo1Obj[selectedSortValue] ? -1 : 1;
      default: 
        return todo1Obj[selectedSortValue] > todo2Obj[selectedSortValue] ? 1 : -1;
    }
  }).forEach((todo) => todoContainerElem.append(todo));
}

export function getModalForm() {
  return document.querySelector('.modal form');
}

export function focusOnNameInput() {
  const inputElem = document.querySelector('.modal form input[name="name"');

  inputElem.focus();
}

export function getSelectedProject() {
  return document.querySelector('.project-elem.selected');
}

export function setHeaderPanelText(str) {
  mainHeaderPanelTextElem.textContent = str;
}

export function setHeaderPanelBorderLeftColor(color) {
  mainHeaderPanelElem.style.borderLeftColor = color;
}

export function hideExtraHeaderPanelElements() {
  for (let elem of elemsToHide) {
    elem.classList.add('removed');
  }
}

export function showExtraHeaderPanelElements() {
  for (let elem of elemsToHide) {
    elem.classList.remove('removed');
  }
}

export function getElemIndex(elem) {
  return Number(elem.dataset.index);
} 

export function placeCursorAtTheEndOfText() {
  const textElements = modalElem.querySelectorAll('input[type="text"], textarea');

  for (let elem of textElements) {
    elem.setSelectionRange(-1, -1);
  }
}

export function toggleEditStatus(elem) {
  elem.classList.toggle('editStatus');
}

export function toggleCheckedStatus(elem) {
  elem.classList.toggle('checked');
}

export function removeCheckedStatus(elem) {
  elem.classList.remove('checked');
}

export function getFormInputValues() {
  const formElem = getModalForm();
  const inputNameValue = formElem.name.value.trim();
  const inputDescriptionValue = formElem.description?.value.trim() ?? '';
  const inputColorValue = formElem.color?.value ?? '';
  const inputDateValue = formElem.date?.value ? new Date(formElem.date.value) : undefined;
  const priorityValue = formElem
    .querySelector('.priority .selected')?.dataset.priority ?? 'default';
  const inputProjectIndex = Number(
    formElem
    .querySelector('select[name="selectProject"]')?.value
  );

  return {
    name: inputNameValue,
    description: inputDescriptionValue,
    color: inputColorValue,
    dueDate: inputDateValue,
    priority: priorityValue,
    projectIndex: inputProjectIndex
  }
}

export function scrollToTheBottomOfTheElem(elem) {
  const bottomScroll = elem.scrollHeight - elem.offsetHeight - elem.scrollTop;

  if (bottomScroll > 0) elem.scrollTop += bottomScroll;
}

export function getElemBeingEdited() {
  return document.querySelector(`.editStatus`);
}

export function getProjectIndexFromTodoElem(todoElem) {
  return Number(todoElem.dataset.projectIndex);
}

export function disableFormValidation() {
  const formElem = getModalForm();
    
  formElem.setAttribute('novalidate', '');
}

export function setSuitableIcon() {
  const menuIconElem = document.querySelector('header .menu-icon');
  const currentIcon = menuIconElem.textContent;

  menuIconElem.textContent = currentIcon == 'menu' ? 'close' : 'menu';
}

export function showSidebar() {
  const sidebarElem = document.querySelector('.sidebar');

  sidebarElem.classList.toggle('showSidebar');
}

export function getProjectElem(projectIndex) {
  return document.querySelector(`.project-elem[data-index="${projectIndex}"]`);
}

export function refreshCounters() {
  renderInitialProjectCounters();
  renderStandardProjectCounters();
}

export function renderInitialProjectCounters() {
  const initialProjectElems = document.querySelectorAll('.initial-project');

  for (const projectElem of initialProjectElems) {
    const projectObj = getElemObjectFromStorage(projectStorage, projectElem);
    const projectName = projectObj.getName();

    const allTodoObjectsArr = getAllTodoObjectsArr();
    const counterElem = projectElem.querySelector('.counter');

    let numOfUncheckedTodos;

    switch(projectName) {
      case 'All': 
        numOfUncheckedTodos = getNumOfUncheckedTodos(allTodoObjectsArr);
  
        break;
      case 'Today': {
        const todayTodoObjectsArr = allTodoObjectsArr.filter(todayFilter);

        numOfUncheckedTodos = getNumOfUncheckedTodos(todayTodoObjectsArr);
  
        break;
      }
      case 'Next 7 days': {
        const weekTodoObjectsArr = allTodoObjectsArr.filter(weekFilter);
  
        numOfUncheckedTodos = getNumOfUncheckedTodos(weekTodoObjectsArr);
  
        break;
      }
      default:
        return;
    }

    counterElem.textContent = numOfUncheckedTodos;

    if (numOfUncheckedTodos > 0) {
      showCounter(counterElem);
    } else {
      hideCounter(counterElem);
    }
  }
}

export function renderStandardProjectCounters() {
  const standardProjectElems = document
    .querySelectorAll('.project-elem:not(.initial-project)');

  for (const projectElem of standardProjectElems) {
    const projectObj = getElemObjectFromStorage(projectStorage, projectElem);
    const todoStorage = projectObj.getTodoStorage();
    const numOfUncheckedTodos = getNumOfUncheckedTodos([...todoStorage.values()]);
    const counterElem = projectElem.querySelector('.counter');

    counterElem.textContent = numOfUncheckedTodos;

    if (numOfUncheckedTodos > 0) {
      showCounter(counterElem);
    } else {
      hideCounter(counterElem);
    }
  }
}

export function incrementCounter(projectElem) {
  const counterElem = projectElem.querySelector('.counter');
  let counter = Number(counterElem.textContent) ?? 0;

  counter++;
  counterElem.textContent = counter;

  if (counter > 0) showCounter(counterElem);
}

export function decrementCounter(projectElem) {
  const counterElem = projectElem.querySelector('.counter');
  let counter = Number(counterElem.textContent) ?? 0;

  counter--;
  counterElem.textContent = counter;

  if (counter <= 0) hideCounter(counterElem);
}

export function showSortDropdown() {
  showElem(sortDropdownElem);
}

export function hideSortDropdown() {
  hideElem(sortDropdownElem);
}


function getNumOfUncheckedTodos(todosArr) {
  const uncheckedTodosArr = todosArr.filter((todoObj) => !todoObj.getChecked());

  return uncheckedTodosArr.length;
}

function todayFilter(todoObj) {
  const todoDueDate = todoObj.getDueDate();

  return isToday(todoDueDate);
}

function weekFilter(todoObj) {
  const todoDueDate = todoObj.getDueDate();
  const deadlineDate = addWeeks(new Date(), 1);

  if (todoDueDate == null || (isPast(todoDueDate) && !isToday(todoDueDate))) {
    return false;
  }

  return todoDueDate <= deadlineDate;
}

function archiveFilter(todoObj) {
  const isTodoChecked = todoObj.getChecked();

  return isTodoChecked;
}

function showCounter(counterElem) {
  showElem(counterElem);
}

function hideCounter(counterElem) {
  hideElem(counterElem);
}

function showElem(elem) {
  elem.classList.remove('hidden');
}

function hideElem(elem) {
  elem.classList.add('hidden');
}

/**
 * Generate a string with \<option\> HTML tags containing projects
 * 
 * @see {@link module:project}
 */
function generateHTMLOptionsStringWithProjects() {
  const arr = [];
  const projectElements = document.
    querySelectorAll('.default-project, .projects .project-elem');

  for (let projectElem of projectElements) {
    const projectName = projectElem.dataset.name;
    const projectIndex = getElemIndex(projectElem);

    arr.push(`<option value="${projectIndex}"}>${projectName}</option>`);
  }

  return arr.join('');
}

function setSelectedAttributeToOptionTag(projectIndex) {
  const optionElem = modalElem
    .querySelector(`select[name="selectProject"] option[value="${projectIndex}"]`);

  optionElem.setAttribute('selected', '');
}

function setPriorityInModalForm(priority) {
  if (priority === 'default') return;

  const priorityButtonElem = modalElem.querySelector(`.priority .${priority}`);

  priorityButtonElem.classList.add('selected');
}

function setProjectElemName(projectElem, name) {
  projectElem.dataset.name = name;
}

function setProjectElemText(projectElem, text) {
  const textElem = projectElem.querySelector('.text');

  textElem.textContent = text;
}

function setProjectElemColor(projectElem, projectColor) {
  const colorElem = projectElem.querySelector('.color');

  colorElem.style.backgroundColor = `${projectColor}`;
}

function setTodoElemName(todoElem, name) {
  const textElem = todoElem.querySelector('.name');

  textElem.textContent = name;
}

function setTodoElemDueDate(todoElem, dueDate) {
  const dueDateElem = todoElem.querySelector('.date');

  dueDateElem.textContent = formatDate(dueDate, 'd MMM');
}

function setTodoElemPriority(todoElem, priority) {
  todoElem.classList.remove('low', 'medium', 'high', 'default');
  todoElem.classList.add(`${priority}`);
  todoElem.dataset.priority = priority;
}

/**
 * Returns a date string in the given format
 * 
 * @param {Date} date 
 * @param {string} formatStr 
 * 
 * @returns {string}
 */
function formatDate(date, formatStr) {
  if (!isValid(date)) return '';

  return format(date, formatStr);
}
