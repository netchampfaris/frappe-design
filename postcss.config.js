const path = require('path');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const production = process.env.FRAPPE_ENV === 'production';

module.exports = {
	plugins: [
		postcssNested,
		postcssImport,
		tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
		production
			? purgecss({
					content: ['./frappe_design/**/*.html', './frappe_design/**/*.md'],
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
			  })
			: null,
		production ? require('cssnano')({ preset: 'default' }) : null
	].filter(Boolean)
};
