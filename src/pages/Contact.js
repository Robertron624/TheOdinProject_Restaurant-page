"use strict";

import socials from "./socials.json";

function getContactItem(label, text) {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.classList.add("flex");
    contactItem.classList.add("flex-col");
    contactItem.classList.add("justify-between");

    const contactLabel = document.createElement("p");
    contactLabel.textContent = label;

    const contactText = document.createElement("p");
    contactText.textContent = text;

    contactItem.appendChild(contactLabel);
    contactItem.appendChild(contactText);

    return contactItem;
}

function getContactInfo() {
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contactInfo.classList.add("flex");
    contactInfo.classList.add("align-center");

    const contactItems = [
        {
            label: "Location:",
            text: "123 Main Street, Culinary City, CC 12345",
        },
        { label: "Phone:", text: "(555) 123-4567" },
        {
            label: "Email:",
            text: `info@savorydelightsrestaurant.com`,
        },
    ];

    contactItems.forEach((item) => {
        const contactItem = getContactItem(item.label, item.text);
        contactInfo.appendChild(contactItem);
    });

    return contactInfo;
}

function getWorkingHours() {
    const workingHours = document.createElement("div");
    workingHours.classList.add("working-hours");

    const subtitle = document.createElement("h3");
    subtitle.textContent = "Working Hours";

    const hoursWrapper = document.createElement("div");
    hoursWrapper.classList.add("hours-wrapper");
    const hoursPrincipal = document.createElement("p");
    hoursPrincipal.textContent = "Monday - Saturday: 11:00am - 10:00pm";
    const hoursWeekend = document.createElement("p");
    hoursWeekend.textContent = "Sunday: 12:00am - 8:00pm";
    hoursWrapper.appendChild(hoursPrincipal);
    hoursWrapper.appendChild(hoursWeekend);

    workingHours.appendChild(subtitle);
    workingHours.appendChild(hoursWrapper);

    return workingHours;
}

function getSocialNetworkItem(network) {
    const { name, url } = network;

    const networkItem = document.createElement("li");
    networkItem.classList.add("social-network-item");

    const networkLink = document.createElement("a");
    networkLink.href = url;

    const networkIcon = document.createElement("i");
    networkIcon.classList.add("fab");
    networkIcon.classList.add(`fa-${name}`);
    networkIcon.classList.add("fa-2x");

    networkLink.appendChild(networkIcon);
    networkItem.appendChild(networkLink);

    return networkItem;
}

function getSocialNetworks() {
    const socialNetworks = document.createElement("div");
    socialNetworks.classList.add("social-networks");

    const socialNetworksTitle = document.createElement("h3");
    socialNetworksTitle.textContent = `Connect with us on social media for the latest updates and culinary delights:`;

    const socialNetworksList = document.createElement("ul");
    socialNetworksList.classList.add("social-networks-list");
    socialNetworksList.classList.add("flex");
    socialNetworksList.classList.add("justify-center");

    socials.forEach((network) => {
        const networkItem = getSocialNetworkItem(network);
        socialNetworksList.appendChild(networkItem);
    });

    const socialNetworksMessage = document.createElement("p");
    socialNetworksMessage.textContent =
        "We look forward to welcoming you to Savory Delights, where every moment is a celebration of flavor!";

    socialNetworks.appendChild(socialNetworksTitle);
    socialNetworks.appendChild(socialNetworksList);
    socialNetworks.appendChild(socialNetworksMessage);

    return socialNetworks;
}

function Contact() {
    const contactElement = document.createElement("div");
    contactElement.innerHTML = "<h1>Contact</h1>";
    contactElement.id = "contact";

    const subtitle = document.createElement("h2");
    subtitle.innerHTML = "Get in Touch with Savory Delights";

    const contactInfo = getContactInfo();
    const workingHours = getWorkingHours();
    const socialNetworks = getSocialNetworks();

    contactElement.appendChild(subtitle);
    contactElement.appendChild(contactInfo);
    contactElement.appendChild(workingHours);
    contactElement.appendChild(socialNetworks);

    return contactElement;
}

export default Contact;
