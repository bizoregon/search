import  { stringOptionsBuilder, dateTimeOptionsBuilder, numberOptionsBuilder } from './builders.js';
import  { stringHandler, dateTimeHandler, numberHandler, floatHandler } from './handlers.js';

/** Utility that removes all existing options in operatorSelector.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler
 *
 * @example operatorSelectorCleaner(id);
*/
function operatorSelectorCleaner(id) {
  const selector = `[data-id='operator${id}']`;
  const operatorSelector = document.querySelector(selector);

  while (operatorSelector.options.length > 0) {
    operatorSelector.remove(0);
  }
}

/** Creates and adds new options to operatorSelector
 *
 * @param {string} type - The string type of the data being passed in.
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler.
 *
 * @example createAndAddNewOptions("string", searchExpressionCount);
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

/** propSelector selects the appropriate handler that builds select options.
 *
 * @param {int} id - The `id` of the row that is passed in by the plusLink event handler.
 *
 * @example propSelector(id);
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
