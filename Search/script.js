import { stringHandler, dateTimeHandler, numberHandler, floatHandler } from './utilities.js';

const propertySelector = document.getElementById('property-selector');

// Handles the property selector change
propertySelector.addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'name':
      stringHandler();
      break;
    case 'status':
      stringHandler();
      break;
    case 'closeDate':
      dateTimeHandler();
      break;
    case 'numberOfEmployees':
      numberHandler();
      break;
    case 'totalProjectCost':
        floatHandler();
        break;
    default:
        break;
  }
});
