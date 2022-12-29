import 'normalize.css';
import './sass/style.scss';
import * as eventHandlers from './modules/event_handlers.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const modalElem = document.querySelector('.modal');
  const headerElem = document.querySelector('header');
  const sidebarElem = document.querySelector('.sidebar');
  const headerPanelElem = document.querySelector('.header-panel');
  const todoContainerElem = document.querySelector('.todo-container');
  const transparentOverlayElem = document.querySelector('.overlay.transparent');

  modalElem.addEventListener('click', eventHandlers.modalHandler);
  headerElem.addEventListener('click', eventHandlers.headerHandler);
  sidebarElem.addEventListener('click', eventHandlers.sidebarHandler);
  headerPanelElem.addEventListener('click', eventHandlers.headerPanelHandler);
  todoContainerElem.addEventListener('click', eventHandlers.todoContainerHandler);
  transparentOverlayElem.addEventListener('click', eventHandlers.transparentOverlayHandler);

  eventHandlers.renderElementsOnProgramStart();
});
