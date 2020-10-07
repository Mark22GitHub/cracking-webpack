// import css from "./style.css";
import data from "./data/data.json";

import myGallery from "./components/gallery/index.js";
console.log(myGallery);
myGallery.init();

//========Declarative===========//

// // console.log(data[0]);

// const galleryList = document.querySelector(".photo-gallery");
// const div = document.querySelector(".js-lightbox");
// const img = document.querySelector(".lightbox__image");
// const button = document.querySelector('button[data-action="close-lightbox"]');

// data.map((item, index) => {
//   const listItem = document.createElement("li");

//   const title = document.createElement("h2");
//   title.textContent = item.title;

//   const img = document.createElement("img");
//   img.src = item.image;
//   img.setAttribute("data-index", index);
//   img.alt = item.title;

//   const description = document.createElement("p");
//   description.textContent = item.description;

//   const category = document.createElement("h3");
//   category.textContent = item.category;
//   const categorySpan = document.createElement("span");
//   categorySpan.textContent = "категория: ";
//   category.append(categorySpan);

//   const seria = document.createElement("p");
//   seria.textContent = item.seria;
//   const seriaSpan = document.createElement("span");
//   seriaSpan.textContent = "серия: ";
//   seria.append(seriaSpan);

//   const author = document.createElement("p");
//   author.textContent = item.author.name;
//   const authorSpan = document.createElement("span");
//   authorSpan.textContent = "фотограф:";
//   author.append(authorSpan);

//   const country = document.createElement("p");
//   country.textContent = item.author.country;
//   const countrySpan = document.createElement("span");
//   countrySpan.textContent = item.author.city;
//   country.append(countrySpan);

//   listItem.append(title, img, description, category, seria, author, country);

//   galleryList.append(listItem);
// });

// galleryList.addEventListener("click", (event) => {
//   if (event.target.nodeName === "IMG") {
//     div.classList.add("is-open");
//     img.src = event.target.src;
//     img.dataset.index = event.target.dataset.index;
//   }
//   //   console.dir(event.target);
// });

// button.addEventListener("click", () => {
//   closeOverlay();
// });

// div.addEventListener("click", () => {
//   closeOverlay();
// });

// window.addEventListener("keydown", (event) => {
//   if (event.code === "Escape") {
//     closeOverlay();
//   }
//   if (event.code === "ArrowRight") {
//     arrowRight();
//   }

//   if (event.code === "ArrowLeft") {
//     arrowLeft();
//   }
// });

// function closeOverlay() {
//   div.classList.remove("is-open");
//   img.src = "";
// }

// // console.log(img.dataset.index);

// function setNewSrc(step, index) {
//   img.dataset.index = `${index + step}`;
//   //   console.log(img.src);
//   //   console.log(step);
//   img.src = data[index + step].image;
// }

// function arrowLeft() {
//   let index = +img.dataset.index;
//   if (index === 0) {
//     setNewSrc(0, data.length - 1);
//     return;
//   }
//   setNewSrc(-1, index);
// }

// function arrowRight() {
//   let index = +img.dataset.index;
//   if (index === data.length - 1) {
//     setNewSrc(0, 0);
//     return;
//   }
//   setNewSrc(1, index);
// }

//==============================//
