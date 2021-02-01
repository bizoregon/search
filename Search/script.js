import { propSelector, newSearchExpressionRow } from './utilities/utilities.js';

const plusLink = document.querySelector('.plus-link');

let searchExpressionCount = 0;

// Add the initial event listener
propSelector(0);

plusLink.addEventListener('click', (e) => {
  e.preventDefault();

  searchExpressionCount++;

  const formRow = document.querySelector('.form-row');
  const newRows = document.getElementsByClassName('new-search-expression-row');

  // Builds a search expression with dynamic values
  const node = newSearchExpressionRow(searchExpressionCount);

  // Ensures the proper order of insertion for the nodes (top down)
  if (newRows.length > 0) {
      const lastRow = newRows[newRows.length - 1];
      lastRow.insertAdjacentHTML('afterend', node);
  } else {
      formRow.insertAdjacentHTML('afterend', node);
  }

  // Add a 1:1 event listener for this dynamically generated row.
  propSelector(searchExpressionCount);

  return searchExpressionCount;
});
