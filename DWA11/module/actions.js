// @ts-check

/**
 * @typedef {Object} Add
 * @prop {'ADD'} type
 */

/**
 * @typedef {Object} Subtract
 * @prop {'SUBTRACT'} type
 */

/**
 * @typedef {Object} Reset
 * @prop {'RESET'} type
 */

/**
 * @typedef {Add | Subtract | Reset} Action
 */

export const Action = {};

/**
 * @returns {Add}
 */
export const add = () => {
  return {
    type: "ADD",
  };
};

/**
 * @returns {Subtract}
 */
export const subtract = () => {
  return {
    type: "SUBTRACT",
  };
};

/**
 * @returns {Reset}
 */
export const reset = () => ({ type: "RESET" });
