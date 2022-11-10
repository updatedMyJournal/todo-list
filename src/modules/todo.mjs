/** @module todo */

/** 
 * Class representing a todo
 * 
 * @property {boolean} checked - a mark indicating whether the todo is completed
 * @property {string} name - a todo title
 * @property {string} description - a todo description
 * @property {string} dueDate - a todo due date
 * @property {Project} project - a project which contains the todo
 * @property {string} priority - a todo priority
 * @property {number} index - a todo index 
 * 
 * @see {@link module:project}
 */
export default class Todo {
  #checked;
  #name;
  #description;
  #dueDate;
  #project;
  #priority;
  #index;

  /**
   * Create a todo
   * 
   * @param {Object} obj - an object with some {@link Todo} properties
   * @param {string} obj.name
   * @param {string} obj.description
   * @param {string} obj.dueDate
   * @param {Project} obj.project
   * @param {number} obj.index
   * @param {boolean} [obj.checked=false]
   * @param {string} [obj.priority]
   */
  constructor(
    {
      name,
      description,
      dueDate,
      project,
      index,
      checked = false,
      priority
    }
  ) {
    this.#checked = checked;
    this.#name = name;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#project = project;
    this.#priority = priority;
    this.#index = index;
  }

  getChecked() {
    return this.#checked;
  }

  setChecked(bool) {
    this.#checked = Boolean(bool);
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  getDueDate() {
    return this.#dueDate;
  }

  setDueDate(newDueDate) {
    // TODO: change
    this.#dueDate = newDueDate;
  }

  getProject() {
    return this.#project;
  }

  setProject(newProject) {
    this.#project = newProject;
  }

  getPriority() {
    return this.#priority;
  }

  setPriority(newPriority) {
    this.#priority = newPriority;
  }

  getIndex() {
    return this.#index;
  }

  setIndex(newIndex) {
    this.#index = newIndex;
  }

  destructurizePrivateFields() {
    return {
      checked: this.getChecked(),
      name: this.getName(),
      description: this.getDescription(),
      dueDate: this.getDueDate(),
      project: this.getProject(),
      priority: this.getPriority(),
      index: this.getIndex()
    }
  }
}
