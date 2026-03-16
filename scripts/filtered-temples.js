const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  },
  {
    templeName: "London England",
    location: "Surrey, England, United Kingdom",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/800x500/london-england-temple-lds-650241-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-evening.jpeg"
  }
];

const album = document.querySelector("#album-grid")

function createTempleCard(templesObject) {
    album.innerHTML = ""

    templesObject.forEach( temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("h3");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location: </span>${temple.location}`;
        dedication.innerHTML = `<span>Dedicated on: </span>${temple.dedicated}`;
        area.innerHTML = `<span>Size: </span>${temple.area} sqft`;
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", `${temple.templeName} Temple`)
        img.setAttribute("loading", "lazy")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        album.appendChild(card)
    } )
}

function checkDate() {

}

const year = document.getElementById("currentyear");

const today = new Date();
year.textContent = today.getFullYear()

document.getElementById("lastModified").textContent = document.lastModified;

// NAV LOGIC

const navButton = document.getElementById("nav-toggle");
const nav = document.querySelector("nav");

navButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    nav.classList.toggle("active");
    navButton.classList.toggle("open")
}

document.querySelector("#home").addEventListener("click", () => {
    createTempleCard(temples)
    toggleMenu()
});
document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples);
    toggleMenu()
});
document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(newTemples);
    toggleMenu()
});
document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        const area = Number(temple.area);
        return area > 90000;
    });
    createTempleCard(largeTemples);
    toggleMenu()
});
document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        const area = Number(temple.dedicated.split(",")[0]);
        return area < 10000;
    });
    createTempleCard(smallTemples);
    toggleMenu()
});

createTempleCard(temples);