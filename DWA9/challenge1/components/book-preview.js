// @ts-check

import { getElementByDataAttribute } from "../modules/view.js";

const template = document.createElement("template");
template.innerHTML = /* HTML */ `
  <style>
    * {
      box-sizing: border-box;
    }

    .preview {
      border-width: 0;
      width: 100%;
      font-family: Roboto, sans-serif;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-align: left;
      border-radius: 8px;
      border: 1px solid rgba(var(--color-dark), 0.15);
      background: rgba(var(--color-light), 1);
    }

    @media (min-width: 60rem) {
      .preview {
        padding: 1rem;
      }
    }

    .preview_hidden {
      display: none;
    }

    .preview:hover {
      background: rgba(var(--color-blue), 0.05);
    }

    .image {
      width: 48px;
      height: 70px;
      object-fit: cover;
      background: grey;
      border-radius: 2px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    }

    .info {
      padding: 1rem;
    }

    .title {
      margin: 0 0 0.5rem;
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: rgba(var(--color-dark), 0.8);
    }

    .author {
      color: rgba(var(--color-dark), 0.4);
    }
  </style>

  <div class="preview" data-preview>
    <img src="" class="image" data-img />

    <div class="info">
      <h3 class="title" data-title></h3>

      <p class="author" data-author></p>
    </div>
  </div>
`;

class BookPreview extends HTMLElement {
  #image = this.getAttribute("image");
  #title = this.getAttribute("title");
  #author = this.getAttribute("author");

  #elements = {
    /** @type {HTMLElement | undefined} */
    preview: undefined,
    /** @type {HTMLElement | undefined} */
    image: undefined,
    /** @type {HTMLElement | undefined} */
    title: undefined,
    /** @type {HTMLElement | undefined} */
    author: undefined,
  };

  #inner = this.attachShadow({ mode: "closed" });

  constructor() {
    super();
    const { content } = template;
    this.#inner.appendChild(content.cloneNode(true));
  }

  connectedCallback() {
    this.#elements = {
      preview: getElementByDataAttribute("preview", this.#inner),
      author: getElementByDataAttribute("author", this.#inner),
      image: getElementByDataAttribute("img", this.#inner),
      title: getElementByDataAttribute("title", this.#inner),
    };

    if (this.#elements.title && this.#title) {
      this.#elements.title.innerText = this.#title;
    } else {
      throw new Error("Title and/or title node could not be found.");
    }

    if (this.#elements.author && this.#author) {
      this.#elements.author.innerText = this.#author;
    } else {
      throw new Error("Author and/or author node could not be found.");
    }

    if (this.#elements.image && this.#image) {
      this.#elements.image.setAttribute("src", this.#image);
    } else {
      throw new Error("Image source and/or image node could not be found.");
    }

    this.#elements.preview?.addEventListener("click", (event) => {
      console.log(this.#title);
      console.log(event);
    });
  }
}

customElements.define("book-preview", BookPreview);
