import SignatureDishesImage from "../assets/images/signature-dishes.jpg";
import AmbianceImage from "../assets/images/ambiance.jpg";
import WinePairingsImage from "../assets/images/wine-pairings.jpg";

function getExploreList() {

    const exploreListItemsContent = [
        {
            name: "Signature Dishes",
            description: " Immerse yourself in a selection of our chef's specialties, each designed to leave a lasting impression.",
            image: SignatureDishesImage,
            attribution: `<a href="https://www.freepik.es/foto-gratis/ensalada-verduras-tomate-pimientos-salteados-perejil-limon-aceite-oliva_7652118.htm#query=special%20dishes&position=2&from_view=search&track=ais&uuid=db5fc085-9f42-48b4-ad7e-176086b5efd7">Imagen de stockking</a> en Freepik`
        },
        {
            name: "Ambiance",
            description: "Enjoy the perfect blend of modern sophistication and cozy charm in our restaurant setting.",
            image: AmbianceImage,
            attribution: `<a href="https://www.freepik.es/foto-gratis/mesa-mimbre-gris-sillas-cristal-gris_6384729.htm#query=restaurant%20ambiance&position=3&from_view=search&track=ais&uuid=7c3ffc62-f548-41a6-a12f-d5f70c3c633b">Imagen de KamranAydinov</a> en Freepik`
        },
        {
            name: "Wine Pairings",
            description: "Elevate your dining experience with our exquisite wine pairings, each carefully selected to complement your meal.",
            image: WinePairingsImage,
            attribution: `Foto de <a href="https://unsplash.com/es/@brett_jordan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brett Jordan</a> en <a href="https://unsplash.com/es/fotos/botella-de-vino-negro-junto-a-copa-de-vino-transparente-sobre-mesa-de-madera-marron-ljwiMZOYNcc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            `
        },
    ];

    const exploreList = document.createElement("ul");
    exploreList.classList.add("explore-list");

    exploreListItemsContent.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("explore-list-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        listItem.appendChild(itemImage);

        const itemTitle = document.createElement("h4");
        itemTitle.textContent = item.name;
        listItem.appendChild(itemTitle);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        listItem.appendChild(itemDescription);

        exploreList.appendChild(listItem);
    });

    return exploreList;

}

function Home() {
    const homeElement = document.createElement("div");
    homeElement.id = "home";
    homeElement.innerHTML = `<h1>Welcome to Savory Delights Restaurant!</h1>`;

    const introContainer = document.createElement("div");
    introContainer.classList.add("intro-container");
    introContainer.classList.add("mx-auto");
    const subtitle = document.createElement("h2");
    subtitle.textContent = "Indulge in a Culinary Adventure";
    const introText = document.createElement("p");
    introText.classList.add("mx-auto");
    introText.textContent = `Discover a world of exquisite flavors at Savory Delights Restaurant, where passion meets palate. Our chefs craft each dish with care, using the finest ingredients to create a symphony of tastes that will tantalize your taste buds.`;
    introContainer.appendChild(subtitle);
    introContainer.appendChild(introText);

    const exploreContainer = document.createElement("div");
    exploreContainer.classList.add("explore");
    exploreContainer.classList.add("mx-auto");
    const exploreTitle = document.createElement("h3");
    exploreTitle.textContent = "Culinary Oasis:";
    const exploreList = getExploreList();
    exploreContainer.appendChild(exploreTitle);
    exploreContainer.appendChild(exploreList);

    homeElement.appendChild(introContainer);
    homeElement.appendChild(exploreContainer);

    return homeElement;
}

export default Home;