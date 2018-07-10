const _ = require("lodash");

const numbers = [76, 55, 23, 64, 19, 11, 3];

_.each(numbers, function(number, i) {
  console.log(number);
});
