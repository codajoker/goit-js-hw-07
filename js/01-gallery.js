import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = makeImageCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function makeImageCard(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

const links = document.querySelectorAll(".gallery__link");
const arrayLinks = [...links];

arrayLinks.map((link) => {
  console.log(link);
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
