"use strict";

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
    contactInfo.classList.add("flex")
    contactInfo.classList.add("align-center")

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

function Contact() {
    const contactElement = document.createElement("div");
    contactElement.innerHTML = "<h1>Contact</h1>";
    contactElement.id = "contact";

    const subtitle = document.createElement("h2");
    subtitle.innerHTML = "Get in Touch with Savory Delights";

    const contactInfo = getContactInfo();

    contactElement.appendChild(subtitle);
    contactElement.appendChild(contactInfo);

    return contactElement;
}

export default Contact;
