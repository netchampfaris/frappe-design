<script>
export default {
	name: 'Preview',
	render(h) {
		if (!this.$slots.default) return;

		let components = [];
		let code = [];
		let preFound = false;
		for (let node of this.$slots.default) {
			if (node.tag === 'pre' || preFound) {
				preFound = true;
				code.push(node);
			} else {
				components.push(node);
			}
		}

		return h('div', [
			h(
				'div',
				{
					staticClass:
						'bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 p-8'
				},
				components
			),
			code
		]);
	}
};
</script>
