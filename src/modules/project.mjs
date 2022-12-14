/** @module project */

/** 
 * Class representing a project
 * 
 * @property {string} name - a project name (title)
 * @property {string} color - a project color
 * @property {number} index - a project index
 * @property {Map<number, Todo>} todoStorage - a todo storage. 
 *     _key_: index, _value_: Todo
 * @property {boolean} initial - a mark indicating whether the project is initial
 * 
 * @see {@link module:todo}
 */
export default class Project {
  #name;
  #color;
  #index;
  #todoStorage;
  #initial;

  /**
   * Create a project
   * 
   * @param {Object} obj - an object with some {@link Project} properties
   * @param {string} obj.name
   * @param {number} obj.index
   * @param {string} obj.color
   * @param {Map<number, Todo>} [obj.todoStorage]
   * @param {boolean} [obj.initial]
   */
  constructor({ name, color, index, todoStorage = new Map(), initial = false }) {
    this.#name = name;
    this.#color = color;
    this.#index = index;
    this.#todoStorage = todoStorage;
    this.#initial = initial;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }

  getColor() {
    return this.#color;
  }

  setColor(newColor) {
    this.#color = newColor;
  }

  getIndex() {
    return this.#index;
  }

  setIndex(newIndex) {
    this.#index = newIndex;
  }

  getTodoStorage() {
    return this.#todoStorage;
  }

  getTodo(key) {
    return this.#todoStorage.get(key);
  }

  addTodo(todo) {
    this.#todoStorage.set(todo.getIndex(), todo);
  }

  deleteTodo(key) {
    this.#todoStorage.delete(key);
  }

  isProjectInitial() {
    return this.#initial;
  }

  /**
   * It isn't allowed to destructurize private fieds just yet,
   *     therefore this 'hack' provides more frexibility with
   *     private fieds
   */
  destructurizePrivateFields() {
    return {
      name: this.getName(),
      color: this.getColor(),
      index: this.getIndex(),
      todoStorage: this.getTodoStorage(),
      initial: this.isProjectInitial()
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
