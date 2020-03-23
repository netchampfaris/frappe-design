const config = require('@frappe/ui/tailwind.config');

module.exports = {
	...config,
	theme: {
		extend: {
            ...config.theme.extend,
			screens: {
				sm: 640 + 256 + 'px',
				// => @media (min-width: 640px) { ... }
				md: 640 + 256 + 'px',
				// => @media (min-width: 768px) { ... }
				lg: 640 + 256 + 'px',
				// => @media (min-width: 1024px) { ... }
				xl: 640 + 256 + 'px'
				// => @media (min-width: 1280px) { ... }
			}
		}
    }
};

