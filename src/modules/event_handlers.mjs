/**
 * This module contains all event handlers.
 * 
 * @module event_handlers 
 */

import Project from './project.mjs';
import Todo from './todo.mjs';
import getComputedIndex from './getComputedIndex.mjs';
import * as domInteractions from './DOM_interactions.mjs';
import { 
  projectStorage, 
  getElemObjectFromStorage, 
  getTodoObjectsArrFromStorage,
  saveChangesToLocalStorage
} from './storage.mjs';

export function headerHandler(e) {
  if (e.target.closest('.menu-icon')) {
    onSidebarIconClick(e);
  }
}

export function sidebarHandler(e) {
  if (!e.target.closest('.sidebar')) return;

  if (e.target.closest('.project-elem')) {
    onProjectSelect(e);
  } else if (e.target.closest('.add')) {
    onProjectAdd(e);
  }
}

export function headerPanelHandler(e) {
  if (!e.target.closest('.header-panel')) return;

  if (e.target.closest('.add')) {
    onTodoAdd(e);
  } else if (e.target.closest('.edit')) {
    onProjectEdit(e);
  } else if (e.target.closest('.sort')) {
    onTodoSort(e);
  } else if (e.target.closest('.dropdown')) {
    onDropdownOptionSelect(e);
  }
}

export function todoContainerHandler(e) {
  if (!e.target.closest('.todo-container')) return;

  if (e.target.closest('.edit')) {
    onTodoEdit(e);
  } else if (e.target.closest('.delete')) {
    onTodoDelete(e);
    saveChangesToLocalStorage();

    domInteractions.refreshCounters();
  } else if (e.target.closest('input[type="checkbox"]')) {
    onCheckboxClick(e);
    saveChangesToLocalStorage();

    domInteractions.refreshCounters();
  } else if (e.target.closest('.todo')) {
    onTodoClick(e);
  }
}

export function modalHandler(e) {
  if (!e.target.closest('.modal')) return;

  if (e.target.closest('.priority')) {
    onPriorityClick(e);
  } else if (e.target.closest('.cancel, .close')) {
    onCancel(e);
  } else if (e.target.closest('.delete')) {
    domInteractions.disableFormValidation();
    domInteractions.refreshCounters();
  }
}

export function renderElementsOnProgramStart() {
  domInteractions.switchToDefaultProject();
  domInteractions.displayStandardProjects();
  domInteractions.refreshCounters();
}

function onSidebarIconClick() {
  domInteractions.setSuitableIcon();
  domInteractions.showSidebar();
}

export function transparentOverlayHandler(e) {
  domInteractions.hideSortDropdown();
  domInteractions.hideTransparentOverlay();
}

function onPriorityClick(e) {
  const priorityContainerElem = e.target.closest('.priority');

  if (
    !priorityContainerElem 
    || priorityContainerElem.closest('.details')
  ) {
    return;
  }

  const prevSelectedPriorityElem = priorityContainerElem.querySelector('.selected');
  const newSelectedPriorityElem = e.target.closest('.low, .medium, .high');

  if (!newSelectedPriorityElem) return;

  if (prevSelectedPriorityElem === newSelectedPriorityElem) {
    newSelectedPriorityElem.classList.toggle('selected');
  } else {
    prevSelectedPriorityElem?.classList.remove('selected');
    newSelectedPriorityElem.classList.add('selected');
  }
}

function onProjectSelect(e) {
  const projectElem = e.target.closest('.project-elem');

  if (!projectElem) return;

  const prevSelectedProject = domInteractions.getSelectedProject();
  const newSelectedProject = projectElem;

  if (prevSelectedProject !== newSelectedProject) {
    prevSelectedProject.classList.remove('selected');
    newSelectedProject.classList.add('selected');
  }

  const projectObj = getElemObjectFromStorage(projectStorage, newSelectedProject);
  const projectName = projectObj.getName();
  const projectColor = projectObj.getColor();
  const todoStorage = projectObj.getTodoStorage();
  const todoObjectsArr = getTodoObjectsArrFromStorage(todoStorage);

  domInteractions.setHeaderPanelText(projectName);
  domInteractions.setHeaderPanelBorderLeftColor(projectColor);
  domInteractions.resetTodoContainer();
  domInteractions.displayTodos(todoObjectsArr, projectName);

  if (newSelectedProject.classList.contains('initial-project')) {
    domInteractions.hideExtraHeaderPanelElements();
  } else {
    domInteractions.showExtraHeaderPanelElements();
  }
}

function onProjectAdd(e) {
  domInteractions.insertModalHeader('Add project');
  domInteractions.insertAddProjectForm();
  domInteractions.insertModalFooter();

  const form = domInteractions.getModalForm();
  const nameInput = domInteractions.getNameInput();

  form.onsubmit = onFormSubmit;
  nameInput.oninput = onNameInput;

  domInteractions.showOverlay();
  domInteractions.focusOnNameInput();
}

function onProjectEdit(e) {
  const projectElem = domInteractions.getSelectedProject();
  const projectObj = getElemObjectFromStorage(projectStorage, projectElem);
  
  domInteractions.insertModalHeader('Edit project');
  domInteractions.insertEditProjectForm(projectObj.destructurizePrivateFields());
  domInteractions.insertModalFooter();
  domInteractions.toggleEditStatus(projectElem);

  const form = domInteractions.getModalForm();
  const nameInput = domInteractions.getNameInput();

  form.onsubmit = onFormSubmit;
  nameInput.oninput = onNameInput;

  domInteractions.showOverlay();
  domInteractions.focusOnNameInput();
  domInteractions.placeCursorAtTheEndOfText();
}

function onTodoAdd(e) {
  domInteractions.insertModalHeader('Add todo');
  domInteractions.insertAddTodoForm();
  domInteractions.insertModalFooter();

  const form = domInteractions.getModalForm();
  const nameInput = domInteractions.getNameInput();

  form.onsubmit = onFormSubmit;
  nameInput.oninput = onNameInput;

  domInteractions.showOverlay();
  domInteractions.focusOnNameInput();
}

function onTodoEdit(e) {
  const todoElem = e.target.closest('.todo');
  const projectElemIndex = domInteractions.getProjectIndexFromTodoElem(todoElem);
  const projectObj = projectStorage.get(projectElemIndex);
  const todoIndex = domInteractions.getElemIndex(todoElem);
  const todoObj = projectObj.getTodo(todoIndex);

  domInteractions.insertModalHeader('Edit todo');
  domInteractions.insertEditTodoForm(todoObj.destructurizePrivateFields());
  domInteractions.toggleEditStatus(todoElem);
  domInteractions.insertModalFooter();

  const form = domInteractions.getModalForm();
  const nameInput = domInteractions.getNameInput();

  form.onsubmit = onFormSubmit;
  nameInput.oninput = onNameInput;

  domInteractions.showOverlay();
  domInteractions.focusOnNameInput();
  domInteractions.placeCursorAtTheEndOfText();
}

function onTodoSort(e) {
  domInteractions.showTransparentOverlay();
  domInteractions.showSortDropdown();
}

function onDropdownOptionSelect(e) {
  const optionElem = e.target.closest('.dropdown-option');

  if (!optionElem) return;

  const prevSelectedOptionElem = document.querySelector('.dropdown-option.selected');

  prevSelectedOptionElem?.classList.remove('selected');
  optionElem.classList.add('selected');

  domInteractions.sortTodos();
  domInteractions.hideSortDropdown();
  domInteractions.hideTransparentOverlay();
}

function onTodoClick(e) {
  const todoElem = e.target.closest('.todo');

  if (!todoElem) return;
  
  const projectElemIndex = domInteractions.getProjectIndexFromTodoElem(todoElem);
  const projectObj = projectStorage.get(projectElemIndex);
  const todoIndex = domInteractions.getElemIndex(todoElem);
  const todoObj = projectObj.getTodo(todoIndex);

  domInteractions.addClassesToModalElem('details');
  domInteractions.insertTodoDetailsElem(todoObj.destructurizePrivateFields());
  domInteractions.showOverlay();
}

function onCheckboxClick(e) {
  const todoElem = e.target.closest('.todo');
  const todoIndex = domInteractions.getElemIndex(todoElem);
  const projectIndex = domInteractions.getProjectIndexFromTodoElem(todoElem);
  const projectObject = projectStorage.get(projectIndex);
  const todoObject = projectObject.getTodo(todoIndex);
  const isTodoChecked = todoObject.getChecked();

  todoObject.setChecked(!isTodoChecked);
  domInteractions.toggleCheckedStatus(todoElem);

  const selectedProjectElem = domInteractions.getSelectedProject();
  const selectedProjectName = selectedProjectElem.dataset.name;

  if (selectedProjectElem.classList.contains('initial-project')) {
    domInteractions.refreshTodoContainer(null, selectedProjectName);
  }
}

function onCancel(e) {
  domInteractions.hideOverlay();
  domInteractions.resetModal();
  domInteractions.resetTempFlags();
}

function onFormSubmit(e) {
  const formElem = domInteractions.getModalForm();
  const inputNameValue = formElem.name.value.trim();
  const isSubmitterDeleteButton = e.submitter.classList.contains('delete');
  
  e.preventDefault();

  if (inputNameValue === '' && !isSubmitterDeleteButton) {
    domInteractions.focusOnNameInput();

    return;
  }

  if (formElem.classList.contains('add-project')) {
    onAddProjectSubmit(e);
  } else if (formElem.classList.contains('add-todo')) {
    onAddTodoSubmit(e);
  } else if (formElem.classList.contains('edit-project')) {
    if (isSubmitterDeleteButton) {
      onProjectDelete(e);
    } else {
      onEditProjectSubmit(e);
    }
  } else if (formElem.classList.contains('edit-todo')) {
    if (isSubmitterDeleteButton) {
      onTodoDelete(e);
    } else {
      onEditTodoSubmit(e);
    }
  }

  domInteractions.hideOverlay();
  domInteractions.resetModal();
  domInteractions.resetTempFlags();
  domInteractions.refreshCounters();

  saveChangesToLocalStorage();
}

function onProjectDelete(e) {
  const projectElem = domInteractions.getElemBeingEdited();
  const projectIndex = domInteractions.getElemIndex(projectElem);

  projectStorage.delete(projectIndex);

  domInteractions.switchToDefaultProject();
  domInteractions.removeElem(projectElem);
}

function onTodoDelete(e) {
  const todoElem = e.target.closest('.todo') ?? domInteractions.getElemBeingEdited();
  const todoIndex = domInteractions.getElemIndex(todoElem);
  const projectIndex = domInteractions.getProjectIndexFromTodoElem(todoElem);
  const projectObj = projectStorage.get(projectIndex);

  projectObj.deleteTodo(todoIndex);

  domInteractions.removeElem(todoElem);
}

function onAddProjectSubmit(e) {
  const projectContainerElem = document.querySelector('.sidebar .projects');
  const projectObjParams = domInteractions.getFormInputValues();
  const projectIndex = getComputedIndex(projectStorage);
  const projectObj = new Project({ ...projectObjParams, index: projectIndex });

  projectStorage.set(projectIndex, projectObj);

  domInteractions.insertProjectElems(projectObj);

  const projectElem = projectContainerElem
    .querySelector(`.project-elem[data-index="${projectIndex}"`);

    domInteractions.scrollToTheBottomOfTheElem(projectElem);
}

function onEditProjectSubmit(e) {
  const projectElem = domInteractions.getElemBeingEdited();
  const projectIndex = domInteractions.getElemIndex(projectElem);
  const projectObj = projectStorage.get(projectIndex);
  const { name, color } = domInteractions.getFormInputValues();

  projectObj.setName(name);
  projectObj.setColor(color);

  domInteractions.editProjectElem(projectElem, projectObj);
  domInteractions.setHeaderPanelBorderLeftColor(color);
  domInteractions.setHeaderPanelText(name);
}

function onAddTodoSubmit(e) {
  const todoContainerElem = document.querySelector('.todo-container');
  const todoObjParams = domInteractions.getFormInputValues();
  const todoProject = projectStorage.get(todoObjParams.projectIndex);
  const todoIndex = getComputedIndex(todoProject.getTodoStorage());
  const todoObj = new Todo({ ...todoObjParams, index: todoIndex });

  const selectedProjectElem = domInteractions.getSelectedProject();

  todoProject.addTodo(todoObj);
  projectStorage.set(todoProject.getIndex(), todoProject);

  if (
    !selectedProjectElem.classList.contains('initial-project')
    || selectedProjectElem.classList.contains('default-project')
  ) {
    domInteractions.displayTodos([ todoObj ]);
  } 

  const todoElem = todoContainerElem.querySelector(`.todo[data-index="${todoIndex}"`);
  
  domInteractions.scrollToTheBottomOfTheElem(todoElem);
}

function onEditTodoSubmit(e) {
  const newTodoObjParams = domInteractions.getFormInputValues();
  const todoElem = domInteractions.getElemBeingEdited();

  const oldTodoProjectIndex = domInteractions.getProjectIndexFromTodoElem(todoElem);
  const oldTodoProjectObj = projectStorage.get(oldTodoProjectIndex);
  const newTodoProjectIndex = newTodoObjParams.projectIndex;
  const newTodoProjectObj = projectStorage.get(newTodoProjectIndex);

  const todoIndex = domInteractions.getElemIndex(todoElem);
  const todoObj = oldTodoProjectObj.getTodo(todoIndex);

  todoObj.setName(newTodoObjParams.name);
  todoObj.setDescription(newTodoObjParams.description);
  todoObj.setDueDate(newTodoObjParams.dueDate);
  todoObj.setProjectIndex(newTodoObjParams.projectIndex);
  todoObj.setPriority(newTodoObjParams.priority);

  domInteractions.editTodoElem(todoElem, todoObj);

  const currentProjectElem = domInteractions.getSelectedProject();
  const currentProjectName = currentProjectElem.dataset.name;
  const currentProjectObj = getElemObjectFromStorage(projectStorage, currentProjectElem);
  const currentProjectTodoStorage = currentProjectObj.getTodoStorage();
  const todoObjectsArr = getTodoObjectsArrFromStorage(currentProjectTodoStorage);

  /**
   * if project has changed, delete todoObj from the old project,
   *    add it to the new one, and refresh todoContainer
   */
  if (newTodoProjectObj !== oldTodoProjectObj) {
    const newProjectTodoStorage = newTodoProjectObj.getTodoStorage();
    const newTodoIndex = getComputedIndex(newProjectTodoStorage);
    
    oldTodoProjectObj.deleteTodo(todoIndex);
    todoObj.setIndex(newTodoIndex);
    newTodoProjectObj.addTodo(todoObj);
  }

  domInteractions.refreshTodoContainer(todoObjectsArr, currentProjectName);
}

function onNameInput(e) {
  const nameInputElem = e.target.closest('input[type="text"]');
  const value = nameInputElem.value?.trim();

  if (value === '') {
    domInteractions.showFormError('Cannot be empty!');
  } else {
    domInteractions.hideFormError();
  }
}
