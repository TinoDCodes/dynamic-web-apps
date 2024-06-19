// @ts-check

import { authors, genres } from "./data.js";

/**
 * This method gets an HTMLElement with the desired data attribute from the DOM and returns
 * a reference to that element.
 *
 * @param {string} attribute - the data attribute of the desired element.
 * @param {Document | ShadowRoot} target - the element from which we want to get a child element.
 * @returns {HTMLElement}
 */
export const getElementByDataAttribute = (attribute, target) => {
  const element = target.querySelector(`[data-${attribute}]`);

  if (!(element instanceof HTMLElement)) {
    document.body.innerText =
      "An unexpected error has occurred. Please refresh the page.";

    throw new Error(
      `Element with attribute 'data-${attribute}' could not be found.`
    );
  }

  return element;
};

/**
 *  An object literal that contains references to all the HTML elements
 * referenced through the operation of the app either upon initialisation or
 * while its running (via event listeners). This arrangement allows for a structured
 * view and access to all user interface elements.
 */
export const documentHtml = {
  list: {
    items: getElementByDataAttribute("list-items", document),
    message: getElementByDataAttribute("list-message", document),
    button: getElementByDataAttribute("list-button", document),
    overlay: getElementByDataAttribute("list-active", document),
    "overlay-close": getElementByDataAttribute("list-close", document),
    "overlay-image": getElementByDataAttribute("list-image", document),
    "overlay-blur": getElementByDataAttribute("list-blur", document),
    "overlay-title": getElementByDataAttribute("list-title", document),
    "overlay-subtitle": getElementByDataAttribute("list-subtitle", document),
    "overlay-description": getElementByDataAttribute(
      "list-description",
      document
    ),
  },
  search: {
    button: getElementByDataAttribute("header-search", document),
    overlay: getElementByDataAttribute("search-overlay", document),
    title: getElementByDataAttribute("search-title", document),
    genres: getElementByDataAttribute("search-genres", document),
    authors: getElementByDataAttribute("search-authors", document),
    cancel: getElementByDataAttribute("search-cancel", document),
    form: getElementByDataAttribute("search-form", document),
  },
  settings: {
    button: getElementByDataAttribute("header-settings", document),
    overlay: getElementByDataAttribute("settings-overlay", document),
    form: getElementByDataAttribute("settings-form", document),
    "overlay-cancel": getElementByDataAttribute("settings-cancel", document),
    "theme-select": getElementByDataAttribute("settings-theme", document),
  },
};

//--------------------- HELPER FUNCTIONS ------------------------//

/**
 * @typedef {Object} Preview
 * @property {string} id
 * @property {HTMLElement} previewHTML
 */

/**
 * @typedef {Object} PreviewData
 * @property {string} author - The author's name.
 * @property {string} id - The id of the book.
 * @property {string} image - The image URL of the book.
 * @property {string} title - The title of the book.
 */

/**
 * Creates a book preview element with given details.
 *
 * @param {PreviewData} data - The book data that is needed to create the preview item.
 * @returns {Preview} The created preview element.
 */
const createPreview = (data) => {
  const { author, id, image, title } = data;
  const authorName = authors[author];

  const element = document.createElement("div");
  element.className = "preview";
  element.dataset.id = id;

  element.innerHTML = /* html */ `
    <img src="${image}" class="preview__image" />
    
    <div class="preview__info">
    <h3 class="preview__title">${title}</h3>
    
    <p class="preview__author">${authorName}</p>
    </div>
    `;

  /**
   * @type {Preview}
   */
  const state = {
    id,
    previewHTML: element,
  };

  return {
    get id() {
      return state.id;
    },

    set id(newValue) {
      throw new Error(
        `Invalid operation. Cannot change id of preview to ${newValue}!`
      );
    },

    get previewHTML() {
      return state.previewHTML;
    },

    set previewHTML(newValue) {
      throw new Error(`Invalid operation. Cannot change preview html!`);
    },
  };
};

/**
 * Loads the given list of books, as preview items, onto the DOM. An HTML node element is created
 * for each book in the list and that element is then appended to the children list of the 'list-items"
 * node.
 *
 * @param {Array<PreviewData>} booksToShow - The array of books to show.
 */
export const loadListItems = (booksToShow) => {
  const { items } = documentHtml.list;
  /**
   * @type {Array<Preview>}
   */
  const list = [];

  booksToShow.forEach((bookItem) => {
    const preview = createPreview(bookItem);

    items.appendChild(preview.previewHTML);
    list.push(preview);
  });
};

/**
 * Updates the text shown in the "Show More" button in the book list, as well as the disabled state
 * of the button. If the number of books left to show is equal to 0, then the button will be disabled.
 *
 * @param {number} booksLeft - The number of books left to be shown.
 */
export const updateShowMoreBtn = (booksLeft) => {
  const { button } = documentHtml.list;

  button.innerHTML = /* html */ `
      <span>Show more <span class="list__remaining">(${booksLeft})</span></span>
  `;
  button.disabled = booksLeft === 0;
};

/**
 * @typedef {Object} OverlayBookData
 * @property {string} image - The URL of the book's cover image.
 * @property {string} title - The title of the book.
 * @property {string} author - The ID of the author of the book.
 * @property {string} published - The published date of the book in ISO string format.
 * @property {string} description - The description of the book.
 */

/**
 * Updates the "data-list-active" overlay element's HTML, using the data of the given book, so that the overlay
 * correctly displays the details of the selected book.
 *
 * @param {OverlayBookData} book - The book object.
 */
export const loadBookOverlayData = (book) => {
  const { list } = documentHtml;
  const publishedDate = new Date(book.published);

  list["overlay-image"].setAttribute("src", book.image);
  list["overlay-blur"].setAttribute("src", book.image);
  list["overlay-title"].innerText = `${book.title}`;
  list["overlay-subtitle"].innerText = `${
    authors[book.author]
  } (${publishedDate.getFullYear()})`;
  list["overlay-description"].innerText = `${book.description}`;
};

//--------------------- LOAD SEARCH SELECT OPTIONS ------------------------//

const { search } = documentHtml;

/**
 * Creates and appends option elements to a filter dropdown.
 *
 * @param {string} defaultOptionText - The text that will represent the option element with the value of `any`. This default option allows users to select all available options in the filter.
 * @param {string} filterKey - the key (from {@link documentHtml.search}) of the filter dropdown to which the options will be appended.
 * @param {Object} optionsList - An object containing key-value pairs representing the available options. Each key corresponds to an option’s value, and the associated value represents the display text for that option.
 */
const createSearchFilterOptions = (
  defaultOptionText,
  filterKey,
  optionsList
) => {
  const defaultOption = document.createElement("option");
  defaultOption.value = "any";
  defaultOption.innerText = defaultOptionText;
  search[filterKey].appendChild(defaultOption);

  // create an option element for each entry in the optionsList object
  Object.entries(optionsList).forEach(([id, name]) => {
    const option = document.createElement("option");
    option.value = id;
    option.innerText = name;

    search[filterKey].appendChild(option);
  });
};

createSearchFilterOptions("All Genres", "genres", genres);
createSearchFilterOptions("All Authors", "authors", authors);
