import 'normalize.css';
import './sass/style.scss';
import { onSidebarIconClick } from './modules/util.mjs';

const menuIconElem = document.querySelector('header .menu-icon');

menuIconElem.onclick = onSidebarIconClick;
