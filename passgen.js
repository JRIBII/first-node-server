var generator = require('generate-password');

var password = generator.generate({
  numbers: true
});

console.log(password);