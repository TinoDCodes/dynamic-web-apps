// @ts-check

import { getElementByDataAttribute, updateCountDisplay } from "./helpers.js";

/*---------- GLOBAL VARIABLES ----------*/
let countValue = 0;
const MIN_VALUE = -5;
const MAX_VALUE = 50;
const controls = {
  subtract: getElementByDataAttribute("subtract"),
  add: getElementByDataAttribute("add"),
  reset: getElementByDataAttribute("reset"),
};

/*---------- EVENT HANDLERS ----------*/
const handleAddition = (event) => {
  controls.subtract.removeAttribute("disabled");
  countValue++;
  updateCountDisplay(countValue);
  if (countValue === MAX_VALUE) controls.add.toggleAttribute("disabled");
};

const handleSubtraction = (event) => {
  controls.add.removeAttribute("disabled");
  countValue--;
  updateCountDisplay(countValue);
  if (countValue === MIN_VALUE) controls.subtract.toggleAttribute("disabled");
};

const handleReset = (event) => {
  controls.add.removeAttribute("disabled");
  controls.subtract.removeAttribute("disabled");

  countValue = 0;
  updateCountDisplay(countValue);
};

/*---------- SCRIPT ----------*/
updateCountDisplay(0);

controls.add.addEventListener("click", handleAddition);
controls.subtract.addEventListener("click", handleSubtraction);
controls.reset.addEventListener("click", handleReset);
