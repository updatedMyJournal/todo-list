import 'normalize.css';
import './sass/style.scss';
import * as eventHandlers from './modules/event_handlers.mjs';

// TODO: generate default projects from storage (on current default tab)

const modalElem = document.querySelector('.modal');
const headerElem = document.querySelector('header');
const sidebarElem = document.querySelector('.sidebar');
const headerPanelElem = document.querySelector('.header-panel');
const todoContainerElem = document.querySelector('.todo-container');

modalElem.addEventListener('click', eventHandlers.modalHandler);
headerElem.addEventListener('click', eventHandlers.headerHandler);
sidebarElem.addEventListener('click', eventHandlers.sidebarHandler);
headerPanelElem.addEventListener('click', eventHandlers.headerPanelHandler);
todoContainerElem.addEventListener('click', eventHandlers.todoContainerHandler);
