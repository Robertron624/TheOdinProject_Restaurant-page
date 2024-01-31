function Menu() {
    const menuElement = document.createElement("div");
    menuElement.innerHTML = "<h1>Menu</h1>";
    menuElement.id = "menu";
    return menuElement;
}

export default Menu;