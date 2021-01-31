/** Utility that removes all existing options in operatorSelector. */
function operatorSelectorCleaner() {
  const operatorSelector = document.querySelector('.operator-selector');

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
  const _id = id;
  switch (type) {
    case 'string':
      stringOptionsBuilder(_id);
      break;
    case 'datetime':
      dateTimeOptionsBuilder(_id);
      break;
    case 'number':
      numberOptionsBuilder(_id);
      break;
    default:
      break;
  }
}

/** Builds a specific input element based on the value of **type**.
 * 
 * @example inputBuilder("string");
 * 
 * @param {string} type - The **type** of the property being passed in as a string.
 */
function inputBuilder(type) {
  let inputTextNode = document.createElement("input");
  let searchInput = document.querySelector('.search-input');

  // Determines what type of input should be 
  switch (type) {
    case "string":
      inputTextNode.setAttribute("type", "text");
      break;
    case "datetime":
      inputTextNode.setAttribute("type", "datetime-local");
      break;
    case "number":
      inputTextNode.setAttribute("type", "number");
      break;
    case "float":
      inputTextNode.setAttribute("type", "number");
      inputTextNode.setAttribute("min", "0.01");
      inputTextNode.setAttribute("step", "0.01");
      break;
    default:
      break;
  }
  
  // Clear existing node
  searchInput.innerHTML = '';

  // Append new node
  searchInput.append(inputTextNode);
}

/** Builds new string-based operator options and adds them to operatorSelector */
function stringOptionsBuilder(id) {
  const operatorSelector = document.querySelector('.operator-selector');
  let isOption = new Option('Is', 'is');
  let containsOption = new Option('Contains', 'contains');
  let startsWithOptions = new Option('Starts With', 'startsWith');
  let endsWithOptions = new Option('Ends With', 'endsWith');

  operatorSelector.add(isOption, undefined);
  operatorSelector.add(containsOption, undefined);
  operatorSelector.add(startsWithOptions, undefined);
  operatorSelector.add(endsWithOptions, undefined);
}

/** Builds new datetime-based operatore options and adds them to operatorSelector */
function dateTimeOptionsBuilder() {
  const operatorSelector = document.querySelector('.operator-selector');
  const isOnOption = new Option('Is On', 'isOn');
  const isBeforeOption = new Option('Is Before', 'isBefore');
  const isOnOrBeforeOption = new Option('Is On Or Before', 'isOnOrBefore');
  const isOnOrAfterOption = new Option('Is On Or After', 'isOnOrAfter');

  operatorSelector.add(isOnOption, undefined);
  operatorSelector.add(isBeforeOption, undefined);
  operatorSelector.add(isOnOrBeforeOption, undefined);
  operatorSelector.add(isOnOrAfterOption, undefined);
}

/** Builds new number-based operatore options and adds them to operatorSelector */
function numberOptionsBuilder() {
  const operatorSelector = document.querySelector('.operator-selector');
  const isOption = new Option("Is", "is");
  const greaterThanOption = new Option("Greater Than", "greaterThan");
  const lessThanOption = new Option("Less Than", "lessThan");
  const greaterThanOrEqualToOption = new Option("Greater Than Or Equal To", "greaterThanOrEqualTo");
  const lessThanOrEqualToOption = new Option("Less Than Or Equal To", "lessThanOrEqualTo");

  operatorSelector.add(isOption, undefined);
  operatorSelector.add(greaterThanOption, undefined);
  operatorSelector.add(lessThanOption, undefined);
  operatorSelector.add(greaterThanOrEqualToOption, undefined);
  operatorSelector.add(lessThanOrEqualToOption, undefined);
}

/**
 * Creates and adds new options for operatorSelector that are string-based.
 * Builds an input of type 'string'.
 */
function stringHandler(id) {
  operatorSelectorCleaner();
  createAndAddNewOptions("string", id);
  inputBuilder("string", id);
}

/**
 * Creates and adds new options for operatorSelector that are datetime-based.
 * Builds an input of type 'datetime-local'.
 */
function dateTimeHandler(id) {
  operatorSelectorCleaner();
  createAndAddNewOptions("datetime", id);
  inputBuilder("datetime", id);
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'number'.
 */
function numberHandler(id) {
  operatorSelectorCleaner();
  createAndAddNewOptions("number", id);
  inputBuilder("number", id)
}

/**
 * Creates and adds new options for operatorSelector that are number-based.
 * Builds an input of type 'float'.
 */
function floatHandler(id) {
  operatorSelectorCleaner();
  createAndAddNewOptions("number", id);
  inputBuilder("float", id);
}

export { operatorSelectorCleaner, 
  createAndAddNewOptions, 
  inputBuilder,
  stringHandler,
  dateTimeHandler,
  numberHandler,
  floatHandler,
  stringOptionsBuilder,
  dateTimeOptionsBuilder,
  numberOptionsBuilder 
} 
