/** 
 * This module contains the storage of all projects and describes
 *     interactions with it.
 * 
 * @module storage 
 */

import Project from "./project.mjs";
import getComputedIndex from "./getComputedIndex.mjs";

/**
 * Storage of all projects. _key_: index, _value_: Project
 * 
 * @type {Map<number, Project>}
 * 
 * @see {@link module:project}
 */
export const projectStorage = new Map();

// TODO: combine with localStorage
initializeProjectStorage(projectStorage);

export function getElemObjectFromStorage(storage, elem) {
  const elemObject = storage.get(Number(elem.dataset.index));

  return elemObject;
}

/**
 * Gets all Todo objects from projectStorage and returns them in an array
 * 
 * @returns {Array<Todo>}
 * 
 * @see {@link module:todo}
 * @see {@link module:storage.projectStorage projectStorage}
 */
export function getAllTodoObjectsArr() {
  // projectStorage -> [...Project] -> [...Todo]
  return [...projectStorage.values()].reduce((arr, proj) => {
    const todoStorage = proj.getTodoStorage();
    const todoObjectsArr = getTodoObjectsArrFromStorage(todoStorage);
    
    arr = arr.concat(todoObjectsArr);

    return arr;
  }, []);
}

/**
 * Gets all Todo objects from a given storage and
 *     returns them in an array
 * 
 * @param {Map<number, Todo>} storage - a todo storage
 * 
 * @returns {Array<Todo>}
 * 
 * @see {@link module:todo}
 */
export function getTodoObjectsArrFromStorage(storage) {
  return [...storage.values()];
}

/**
 * Initialize the projectStorage with initial starting projects.
 *     Initial projects are marked by .initial-project CSS class
 * 
 * @param {Map<number, Project>} projectStorage
 * 
 * @see {@link module:project}
 * @see {@link module:storage.projectStorage projectStorage}
 */
 function initializeProjectStorage(projectStorage) {
  const initialProjects = document.querySelectorAll('.initial-project');

  for (let projectElem of initialProjects) {
    const projectName = projectElem.dataset.name?.trim();

    if (!projectName) throw new Error('Initial project name is not set!');

    const projectIndex = getComputedIndex(projectStorage);
    const projectColor = projectElem.dataset.color;

    projectElem.dataset.index = projectIndex;

    const projectObj = new Project(
      { 
        name: projectName, 
        color: projectColor, 
        index: projectIndex
      }
    );

    projectStorage.set(projectIndex, projectObj);
  }
}
