import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = makeImageCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

let instance = null; // Define instance at a broader scope

function makeImageCard(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`;
    })
    .join("");
}

function onKeydownEscape(event) {
  if (event.code === "Escape") {
    if (instance) {
      instance.close();
    }
  }
}

function enableEscapeListener() {
  document.addEventListener('keydown', onKeydownEscape);
}

function removeEscapeListener() {
  document.removeEventListener("keydown", onKeydownEscape);
}

function ongalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === evt.target.dataset.source) {
      instance = basicLightbox.create(
        `<img src=${item.original} width="800" height="600">`,
        {
          closable: false,
          onClose: () => {
            removeEscapeListener();
          }
        }
      );

      instance.show();
      enableEscapeListener();
    }
  });
}

galleryContainer.addEventListener("click", ongalleryContainerClick);
