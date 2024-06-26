// @ts-check

import { Action } from "./actions.js";
import { reducer } from "./reducers.js";

/**
 * @typedef {object} State
 * @prop {number} count
 */

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

export const State = {};

/**
 * @type {Array<Subscription>}
 */
let subcribers = [];

/**
 * @type {Array<State>}
 */
export const states = [{ count: 0 }];

/**
 * @returns {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0] });
};

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subcribers.forEach((item) => item(prev, next));

  states.unshift(next);
};

/**
 *
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */
export const subscribe = (subscription) => {
  subcribers.push(subscription);
  const handler = (item) => item !== subscription;

  const unsubscribe = () => {
    const newSubscribers = subcribers.filter(handler);
    subcribers = newSubscribers;
  };

  return unsubscribe;
};
