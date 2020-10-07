//=========Классы========//

import "./styles.css";

import gallery from "../../data/data.json";

const refs = {
  list: document.querySelector(".photo-gallery"),
  box: document.querySelector(".js-lightbox"),
  img: document.querySelector(".lightbox__image"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
};

class Gallery {
  constructor({ list, box, img }) {
    this.list = list;
    this.box = box;
    this.img = img;
  }

  init() {
    window.addEventListener("DOMContentLoaded", this.createGallery());
  }

  createElement(obj, index) {
    const li = document.createElement("li");

    const imgOverlay = document.createElement("img");
    imgOverlay.src = obj.image;
    imgOverlay.alt = obj.category;
    imgOverlay.dataset.index = index;
    imgOverlay.width = "400";

    const title = document.createElement("h2");
    title.textContent = obj.title;

    const category = document.createElement("h3");
    category.textContent = obj.category;

    const description = document.createElement("p");
    description.textContent = obj.description;

    const author = document.createElement("p");
    author.textContent = obj.author.name;

    const country = document.createElement("p");
    country.textContent = obj.author.country;

    const seria = document.createElement("p");
    seria.textContent = obj.seria;

    li.append(imgOverlay, description, title, category, author, country, seria);
    this.list.append(li);
  }

  createGallery() {
    gallery.map((obj, i) => this.createElement(obj, i));
  }

  showOverlay(event) {
    if (event.target.nodeName === "IMG") {
      this.box.classList.add("is-open");
      this.img.src = event.target.src;
      this.img.dataset.index = event.target.dataset.index;
    }
  }
  closeOverlay() {
    this.box.classList.remove("is-open");
    this.img.src = "";
  }

  setNewSrc(step, index) {
    this.img.dataset.index = `${index + step}`;
    this.img.src = gallery[index + step].image;
  }
  arrowLeft() {
    let index = +this.img.dataset.index;
    if (index === 0) {
      this.setNewSrc(0, gallery.length - 1);
      return;
    }
    this.setNewSrc(-1, index);
  }

  arrowRight() {
    let index = +this.img.dataset.index;
    if (index === gallery.length - 1) {
      this.setNewSrc(0, 0);
      return;
    }
    this.setNewSrc(1, index);
  }
}
const myGallery = new Gallery(refs);

export default myGallery;

refs.list.addEventListener("click", (event) => {
  myGallery.showOverlay(event);
});

refs.btn.addEventListener("click", (event) => {
  myGallery.closeOverlay();
});

refs.box.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    myGallery.closeOverlay();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    myGallery.closeOverlay();
  }
  if (event.code === "ArrowRight") {
    myGallery.arrowRight();
  }

  if (event.code === "ArrowLeft") {
    myGallery.arrowLeft();
  }
});
