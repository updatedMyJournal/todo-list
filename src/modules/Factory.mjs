/** @module Factory */

import Project from "./project.mjs";
import Todo from "./todo.mjs";

/** classes whose instances Factory is able to create */
const elements = {
  Project,
  Todo,
  Map
}

export default class Factory {
  static createInstance(data) {
    let instance = null;

    if (data.className in elements) {
      instance = new elements[data.className](data.value);
    }

    return instance;
  }
}
