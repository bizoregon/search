import { stringHandler, dateTimeHandler, numberHandler, floatHandler } from './utilities.js';

function propSelector(id) {
  const _id = id;

  // Select the correct propertySelector based on the id. 
  const prop = `[data-id='${id}']`;
  
  const propertySelector = document.querySelector(prop);

  // Then add the event listener to it
  propertySelector.addEventListener('change', (e) => {
    switch (e.target.value) {
      case 'name':
        stringHandler(_id);
        break;
      case 'status':
        stringHandler(_id);
        break;
      case 'closeDate':
        dateTimeHandler(_id);
        break;
      case 'numberOfEmployees':
        numberHandler(_id);
        break;
      case 'totalProjectCost':
          floatHandler(_id);
          break;
      default:
          break;
    }
  });
}

propSelector(0);

const plusLink = document.querySelector('.plus-link');

let searchExpressionCount = 0;

plusLink.addEventListener('click', (e) => {
  e.preventDefault();
  searchExpressionCount++;
  const formRow = document.querySelector('.form-row');
  const newRows = document.getElementsByClassName('new-search-expression-row');

  // Builds a search expression where 
  const node = newSearchExpressionRow(searchExpressionCount);

  // Ensures the proper order of insertion for the nodes (top down)
  if (newRows.length > 0) {
      const lastRow = newRows[newRows.length - 1];
      lastRow.insertAdjacentHTML('afterend', node);
  } else {
      formRow.insertAdjacentHTML('afterend', node);
  }

  // Add a 1:1 event listener for this dynamically generated row.
  addDynamicEventListener(searchExpressionCount);

  return searchExpressionCount;
});

function addDynamicEventListener(id) {
  const selector = `[data-id='${id}']`;
  const customEl = document.querySelector(selector);

  console.log(`This is from addDynamicEventListener: ${customEl}`);
  customEl.addEventListener("load", () => {
    // Everytime addDynamicEventListener is called
    // An id is dynamically passed in, the searchExpressionCount.
    // This is initially passed in via the event listener that's added to plusLink.

    // The id then gets passed everywhere. 
    propSelector(id);
  });
}

/** Builds dumb HTML with a dynamic data-id value
 * 
 * @param {string} id - `id` is the dynamic data value
 */
function newSearchExpressionRow(id) {
  const html = `
    <div class="new-search-expression-row">

      <select name="andOr" class="and-or-selector">
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>

      <select data-id="${id}" name="property" class="property-selector">
        <option value="name">Name</option>
        <option value="status">Status</option>
        <option value="closeDate">Close Date</option>
        <option value="numberOfEmployees">Number of Employees</option>
        <option value="totalProjectCost">Total Project Cost</option>
      </select>

      <select data-id="${id}" name="operator" class="operator-selector">
        <option value="is">Is</option>
        <option value="contains">Contains</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
    </select>

    <span data-id="${id}" class="searchInput"><input type="text"></span>
    </div>
  `;
  return html;
}