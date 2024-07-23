// @ts-check

/**
 * This method gets an HTMLElement with the desired data attribute from the DOM and returns
 * a reference to that element.
 *
 * @param {string} attribute - the data attribute of the desired element.
 * @returns {HTMLElement}
 */
export const getElementByDataAttribute = (attribute) => {
  const element = document.querySelector(`[data-${attribute}]`);

  if (!(element instanceof HTMLElement)) {
    document.body.innerText =
      "An unexpected error has occurred. Please refresh the page.";

    throw new Error(
      `Element with attribute 'data-${attribute}' could not be found.`
    );
  }

  return element;
};
