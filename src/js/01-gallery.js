// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let currentInstance = null;
const markup = galleryItems
  .map(
    (galleryItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
    title="${galleryItem.description}"
  />
</a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", openModal);


const lightbox = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionDelay: 250,
  });