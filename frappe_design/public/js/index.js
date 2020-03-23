import Vue from 'vue/dist/vue.js';
import Preview from './Preview.vue';
import Button from '@frappe/ui/button';
import featherIcon from '@frappe/ui/feather-icon';

document.addEventListener('DOMContentLoaded', () => {
	Vue.component('f-preview', Preview);
	Vue.component('f-button', Button);
	Vue.component('feather-icon', featherIcon);
	window.Vue = Vue;

	new Vue({ el: '.from-markdown' });

	// Render Preview blocks
	Array.from(document.querySelectorAll('.preview')).forEach(el => {
		let html = el.innerHTML;
		new Vue({
			el,
			components: {
				Preview
			},
			template: `<Preview>${html}</Preview>`
		});
	});

	// Highlight using Prism
	Array.from(document.querySelectorAll('pre > code')).forEach(el => {
		let className = el.classList[0];
		if (className) {
			el.classList.add(`language-${className}`);
		}
	});
	Prism.highlightAllUnder(document.querySelector('.from-markdown'));
});
