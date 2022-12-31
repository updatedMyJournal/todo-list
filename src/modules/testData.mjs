/** @module testData  */

import { projectStorage } from "./storage.mjs";
import Project from "./project.mjs";
import Todo from "./todo.mjs";
import getComputedIndex from "./getComputedIndex.mjs";

export default function addTestProjectsAndTodos() {
  const defaultProject = projectStorage.get(0);

  const workProject = new Project({
    name: 'Work',
    color: '#FF4433',
    index: getComputedIndex(projectStorage),
  });

  projectStorage.set(workProject.getIndex(), workProject);

  const sportProject = new Project({
    name: 'Sport',
    color: '#3350FF',
    index: getComputedIndex(projectStorage),
  });

  projectStorage.set(sportProject.getIndex(), sportProject);

  const defaultTodos = [
    new Todo({
      name: 'Shopping',
      description: 'I should buy some milk. And cookies!',
      projectIndex: 0,
      index: 0,
      priority: 'medium'
    }),
    new Todo({
      name: 'Do chores',
      description: '',
      projectIndex: 0,
      index: 1
    }),
    new Todo({
      name: 'Go to the cinema',
      description: 'That new Avatar movie looks cool.',
      dueDate: new Date(2022, 11, 22),
      projectIndex: 0,
      index: 2,
      priority: 'low'
    }),
    new Todo({
      name: 'Get some sleep',
      description: '',
      dueDate: new Date(),
      projectIndex: 0,
      index: 3,
      priority: 'high'
    })
  ];

  defaultTodos.forEach((todo) => defaultProject.addTodo(todo));

  const workTodos = [
    new Todo({
      name: 'Finish the task',
      description: '',
      dueDate: new Date(2022, 11, 31),
      projectIndex: workProject.getIndex(),
      index: 0,
      priority: 'high'
    }),
    new Todo({
      name: 'Do some work',
      description: '',
      projectIndex: workProject.getIndex(),
      index: 1,
      priority: 'medium'
    })
  ];

  workTodos.forEach((todo) => workProject.addTodo(todo));

  const sportTodos = [
    new Todo({
      name: 'Go jogging',
      description: '',
      projectIndex: sportProject.getIndex(),
      index: 0,
    })
  ];

  sportTodos.forEach((todo) => sportProject.addTodo(todo));
}
