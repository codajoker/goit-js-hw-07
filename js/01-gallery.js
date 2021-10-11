import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const makeImageCard = (img) =>
  galleryItems.map(({ preview, original, description }) => {
    console.log(preview);
    return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src=${preview}
            data-source="large-image.jpg"
            alt=${description}
          />
        </a>
      </div>`;
  });
const elements = gallery.insertAdjacentHTML(
  "beforeend",
  makeImageCard(galleryItems)
);
console.log(galleryItems);
