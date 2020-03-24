import Vue from 'vue/dist/vue.js';
import Preview from './Preview.vue';
import FrappeUI from '@frappe/ui';

Vue.use(FrappeUI);

document.addEventListener('DOMContentLoaded', () => {
	Vue.component('f-preview', Preview);

	window.Vue = Vue;

	// Render Preview blocks
	Array.from(document.querySelectorAll('.preview')).forEach(el => {
		let html = el.innerHTML;
		let classes = el.className;
		let code = '';
		if (el.classList.contains('html')) {
			code = `<pre><code class="html">{{ html }}</code></pre>`;
		}
		new Vue({
			el,
			data: () => ({ html }),
			components: { Preview },
			template: `<Preview class="${classes}">${html}${code}</Preview>`
		});
	});

	new Vue({ el: '.from-markdown' });

	// Highlight using Prism
	Array.from(document.querySelectorAll('pre > code')).forEach(el => {
		let className = el.classList[0];
		if (className && !className.includes('language-')) {
			el.classList.add(`language-${className}`);
		}
	});

	Prism.highlightAllUnder(document.querySelector('.from-markdown'));

	// colors
	Array.from(document.querySelectorAll('[data-color]')).forEach(el => {
		Array.from(el.children).forEach(child => {
			let shade = child.querySelector('.w-12');
			let rgb = getComputedStyle(shade).backgroundColor;
            let rgbInArray = rgb.match(/([0-9]+)/g).map(d => parseInt(d, 10));
            let hexCode = rgbToHex.apply(null, rgbInArray);
			child.querySelector('code[data-hex-code]').textContent = hexCode;
		});
	});
});

function rgbToHex(r, g, b) {
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
}
