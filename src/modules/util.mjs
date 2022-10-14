function onSidebarIconClick() {
  setSuitableIcon();
  showSidebar();
}

function setSuitableIcon() {
  const menuIconElem = document.querySelector('header .menu-icon');
  const currentIcon = menuIconElem.textContent;

  menuIconElem.textContent = currentIcon == 'menu' ? 'close' : 'menu';
}

function showSidebar() {
  const sidebarElem = document.querySelector('.sidebar');

  sidebarElem.classList.toggle('showSidebar');
}

export { onSidebarIconClick };
