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

/** Builds dumb HTML with a dynamic data-id value
 *
 * @param {string} id - `id` is the dynamic data value
 */
function newSearchExpressionRow(id) {
  const html = `
    <div class="new-search-expression-row">

      <select name="andOr" class="and-or-selector select-class">
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>

      <select data-id="prop${id}" name="property" class="property-selector select-class">
        <option value="name">Name</option>
        <option value="status">Status</option>
        <option value="closeDate">Close Date</option>
        <option value="numberOfEmployees">Number of Employees</option>
        <option value="totalProjectCost">Total Project Cost</option>
      </select>

      <select data-id="operator${id}" name="operator" class="operator-selector select-class">
        <option value="is">Is</option>
        <option value="contains">Contains</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select>

      <span data-id="input${id}" class="search-input${id}"><input type="text"></span>
    </div>
  `;
  return html;
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
  newSearchExpressionRow,
  createAndAddNewOptions,
  operatorSelectorCleaner
}
