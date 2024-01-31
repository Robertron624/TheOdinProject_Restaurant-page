"use strict";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import "./style.css";

const contentBtns = document.querySelectorAll(".content-btn");
const pageContent = document.querySelector("#content");

pageContent.innerHTML = "";
pageContent.appendChild(Home());
contentBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonId = btn.id.replace("-btn", "");

        pageContent.innerHTML = "";

        // Add active class only to the clicked button
        contentBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        const content = getContent(buttonId);
        pageContent.appendChild(content);
    });
});

function getContent(buttonId) {
    let content;

    switch (buttonId) {
        case "home":
            content = Home();
            break;
        case "menu":
            content = Menu();
            break;
        case "contact":
            content = Contact();
            break;
        default:
            content = Home();
    }

    return content;
}






