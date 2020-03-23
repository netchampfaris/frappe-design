const resolveConfig = require('tailwindcss/resolveConfig');
const config = require('./tailwind.config');

console.log(resolveConfig(config));
