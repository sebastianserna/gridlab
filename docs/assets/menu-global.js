/*
 * GridLab Menu - v0.1.0
 * @license MIT
*/

"use strict";

const menuGlobalItems = [
  { 
    name: 'Bulma', 
    link: "bulma"
  },
  { 
    name: 'Foundation', 
    link: "foundation"
  },
  { 
    name: 'Pure', 
    link: "pure"
  },
  { 
    name: 'Tailwind', 
    link: "tailwind"
  },
  { 
    name: 'Reflex', 
    link: "reflex"
  },
  { 
    name: 'Flash Grid', 
    link: "flashgrid"
  },
  { 
    name: 'Blueprint', 
    link: "blueprint"
  },
  { 
    name: 'Raster', 
    link: "raster"
  },
  { 
    name: 'Swanix', 
    link: "swanix"
  }
];

const menuGlobalTemplate = /*html*/ `
  <img src="assets/images/favicon.svg" width="40" height="40" />
  <h2 class="main-logo"><a href="./">GridLab</a></h2>
  ${menuGlobalItems.map(item => `
  <li>
    <a class="menu-item" href="${item.link}">
      ${item.name ? `${item.name}`:` `}
    </a>
  </li>
  `).join('')}
`;

const menuGlobalStyles = /*html*/ `
<style>

</style>
`;

function createMenuGlobal() {
  let mainHeader = document.getElementsByClassName('main-header');
  let menuGlobal = document.createElement('ul');
  menuGlobal.id = "menu-global";
  menuGlobal.innerHTML = menuGlobalTemplate + menuGlobalStyles;

  mainHeader[0].insertAdjacentElement("afterbegin", menuGlobal);
  addMenuGlobalActiveClass();
}

function addMenuGlobalActiveClass() {
  let sectionPathname = window.location.pathname;
  let menuLink = document.getElementsByClassName('menu-item');

  for (let i = 0; i < menuLink.length; i++) {
    if(menuLink[i].pathname === sectionPathname) {
      menuLink[i].classList.add("active");
    }
  } 
};

document.addEventListener("DOMContentLoaded", createMenuGlobal);