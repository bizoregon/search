import { operatorSelectorCleaner, createAndAddNewOptions } from './utilities.js';
import { inputBuilder } from './builders.js';

/**
 * Creates and adds new options for operatorSelector that are string-based.
 * Builds an input of type 'string'.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler
 *
 * @example stringHandler(id);
 *
 */
function stringHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("string", id);
  inputBuilder("string", id);
}

/**
 * Creates and adds new options for operatorSelector that are datetime-based.
 * Builds an input of type 'datetime-local'.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler
 *
 * @example dateTimeHandler(id);
 */
function dateTimeHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("datetime", id);
  inputBuilder("datetime", id);
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'number'.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler
 *
 * @example numberHandler(id);
 *
 */
function numberHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("number", id);
  inputBuilder("number", id);
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'float'.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler
 *
 * @example floatHandler(id);
 */
function floatHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("number", id);
  inputBuilder("float", id);
}

export {
  stringHandler,
  dateTimeHandler,
  numberHandler,
  floatHandler
}