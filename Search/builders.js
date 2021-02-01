/** Builds a specific input element based on the value of **type**.
 *
 * @example inputBuilder("string");
 *
 * @param {string} type - The **type** of the property being passed in as a string.
 */
function inputBuilder(type, id) {
  let inputTextNode = document.createElement("input");

  // Has to be dynamic too
  const selector = `.search-input${id}`;

  let searchInput = document.querySelector(selector);

  // Need to set the data-id properly dynamically here.
  inputTextNode.setAttribute("data-id", id);

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
  const selector = `[data-id='operator${id}']`;
  const operatorSelector = document.querySelector(selector);
  let isOption = new Option('Is', 'is');
  let containsOption = new Option('Contains', 'contains');
  let startsWithOptions = new Option('Starts With', 'startsWith');
  let endsWithOptions = new Option('Ends With', 'endsWith');

  operatorSelector.add(isOption, undefined);
  operatorSelector.add(containsOption, undefined);
  operatorSelector.add(startsWithOptions, undefined);
  operatorSelector.add(endsWithOptions, undefined);
}

/** Builds new datetime-based operator options and adds them to operatorSelector */
function dateTimeOptionsBuilder(id) {
  const selector = `[data-id='operator${id}']`;
  const operatorSelector = document.querySelector(selector);
  const isOnOption = new Option('Is On', 'isOn');
  const isBeforeOption = new Option('Is Before', 'isBefore');
  const isOnOrBeforeOption = new Option('Is On Or Before', 'isOnOrBefore');
  const isOnOrAfterOption = new Option('Is On Or After', 'isOnOrAfter');

  operatorSelector.add(isOnOption, undefined);
  operatorSelector.add(isBeforeOption, undefined);
  operatorSelector.add(isOnOrBeforeOption, undefined);
  operatorSelector.add(isOnOrAfterOption, undefined);
}

/** Builds new number-based operator options and adds them to operatorSelector */
function numberOptionsBuilder(id) {
  const selector = `[data-id='operator${id}']`;
  const operatorSelector = document.querySelector(selector);
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

export {
  inputBuilder,
  stringOptionsBuilder,
  dateTimeOptionsBuilder,
  numberOptionsBuilder
}