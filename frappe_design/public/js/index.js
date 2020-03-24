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
});
