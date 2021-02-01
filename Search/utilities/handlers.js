import { operatorSelectorCleaner, createAndAddNewOptions } from './utilities.js';
import { inputBuilder } from './builders.js';

/**
 * Creates and adds new options for operatorSelector that are string-based.
 * Builds an input of type 'string'.
 */
function stringHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("string", id);
  inputBuilder("string", id);
}

/**
 * Creates and adds new options for operatorSelector that are datetime-based.
 * Builds an input of type 'datetime-local'.
 */
function dateTimeHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("datetime", id);
  inputBuilder("datetime", id);
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'number'.
 */
function numberHandler(id) {
  operatorSelectorCleaner(id);
  createAndAddNewOptions("number", id);
  inputBuilder("number", id);
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'float'.
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