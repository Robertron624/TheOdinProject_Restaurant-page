"use strict";

import menuData from "./menu.json";

const processedMenuData = menuData.map(section => {
    return {
      ...section,
      items: section.items.map(item => ({
        ...item,
        imageSrc: require(`../assets/images/${item.imageSrc}`),
      })),
    };
  });

function getMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const name = document.createElement("p");
    name.classList.add("item-name");
    name.textContent = item.name;
    menuItem.appendChild(name);

    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.name;
    menuItem.appendChild(image);

    const description = document.createElement("p");
    description.classList.add("item-description");
    description.textContent = item.description;
    menuItem.appendChild(description);

    return menuItem;
}

function getMenuSection(name, items) {

    const section = document.createElement("div");
    section.classList.add("menu-section");

    const title = document.createElement("h3");
    title.textContent = name;
    section.appendChild(title);

    const sectionItems = document.createElement("div");
    sectionItems.classList.add("section-items");
    section.appendChild(sectionItems);

    items.forEach((item) => {
        const menuItem = getMenuItem(item);
        sectionItems.appendChild(menuItem);
    });

    return section;

}

function Menu() {
    const menuElement = document.createElement("div");
    menuElement.innerHTML = "<h1>Menu</h1>";
    menuElement.id = "menu";


    const subtitle = document.createElement("h2");
    subtitle.textContent = "Culinary Masterpieces That Ignite the Senses";
    menuElement.appendChild(subtitle);

    const sections = document.createElement("div");
    sections.classList.add("menu-sections");

    processedMenuData.forEach((section) => {
        const menuSection = getMenuSection(section.name, section.items);
        sections.appendChild(menuSection);
    });

    menuElement.appendChild(sections);



    return menuElement;
}

export default Menu;