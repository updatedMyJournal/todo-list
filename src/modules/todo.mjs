/** @module todo */

/** 
 * Class representing a todo
 * 
 * @property {boolean} checked - a mark indicating whether the todo is completed
 * @property {string} name - a todo title
 * @property {string} description - a todo description
 * @property {Date} dueDate - a todo due date
 * @property {number} projectIndex - an index of the project which contains the todo
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
  #projectIndex;
  #priority;
  #index;

  /**
   * Create a todo
   * 
   * @param {Object} obj - an object with some {@link Todo} properties
   * @param {string} obj.name
   * @param {string} obj.description
   * @param {Date} [obj.dueDate]
   * @param {Project} obj.projectIndex
   * @param {number} obj.index
   * @param {boolean} [obj.checked=false]
   * @param {string} [obj.priority]
   */
  constructor(
    {
      name,
      description,
      dueDate,
      projectIndex,
      index,
      checked = false,
      priority = 'default'
    }
  ) {
    this.#checked = checked;
    this.#name = name;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#projectIndex = projectIndex;
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
    this.#dueDate = newDueDate;
  }

  getProjectIndex() {
    return this.#projectIndex;
  }

  setProjectIndex(newProjectIndex) {
    this.#projectIndex = newProjectIndex;
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
      projectIndex: this.getProjectIndex(),
      priority: this.getPriority(),
      index: this.getIndex()
    }
  }

  toJSON() {
    return {
      className: this.constructor.name,
      value: {
        ...this.destructurizePrivateFields()
      }
    }
  }
}
