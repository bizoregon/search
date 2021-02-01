import  { stringOptionsBuilder, dateTimeOptionsBuilder, numberOptionsBuilder } from './builders.js';
import  { stringHandler, dateTimeHandler, numberHandler, floatHandler } from './handlers.js';

/** Utility that removes all existing options in operatorSelector. */
function operatorSelectorCleaner(id) {
  const selector = `[data-id='operator${id}']`;
  const operatorSelector = document.querySelector(selector);

  while (operatorSelector.options.length > 0) {
    operatorSelector.remove(0);
  }
}

/** Creates and adds new options to operatorSelector
 *
 * @example createAndAddNewOptions("string");
 *
 * @param {string} type - The string type of the data being passed in.
 */
function createAndAddNewOptions(type, id) {
  switch (type) {
    case 'string':
      stringOptionsBuilder(id);
      break;
    case 'datetime':
      dateTimeOptionsBuilder(id);
      break;
    case 'number':
      numberOptionsBuilder(id);
      break;
    default:
      break;
  }
}

/** propSelector is the traffic cop for the whole thing.
 * @param {int} id - `id` is the id of the row that is
 * passed in by the plusLink event handler
 */
function propSelector(id) {

  // Select the correct propertySelector based on the id.
  const prop = `[data-id='prop${id}']`;

  const propertySelector = document.querySelector(prop);

  // Then add the event listener to it
  propertySelector.addEventListener('change', (e) => {
    switch (e.target.value) {
      case 'name':
        stringHandler(id);
        break;
      case 'status':
        stringHandler(id);
        break;
      case 'closeDate':
        dateTimeHandler(id);``
        break;
      case 'numberOfEmployees':
        numberHandler(id);
        break;
      case 'totalProjectCost':
          floatHandler(id);
          break;
      default:
          break;
    }
  });
}

export {
  propSelector,
  createAndAddNewOptions,
  operatorSelectorCleaner
}
