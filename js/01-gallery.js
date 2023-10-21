import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = makeImageCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

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
galleryContainer.addEventListener("click", ongalleryContainerClick);
function closeEscapeWindow () {
   document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
      });
}

function onKeydownEscape(event) {
    event.preventDefault();

    if (event.code === 'Escape') {
        instance.close();
    }
}

function enableEscapeListener() {
    document.addEventListener('keydown', onKeydownEscape);
}


function removeEscapeListener () {
   document.removeEventListener("keydown", onKeydownEscape);
}

function ongalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === evt.target.dataset.source) {
      const instance = basicLightbox.create(
        ` <img src=${item.original} width="800" height="600">`
      ),{
            closable: false,
            onClose: () => {
                removeEscapeListener();
            }
        }

      instance.show();
      enableEscapeListener()
    }
  });
}
