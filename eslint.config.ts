import { defineConfig, pvtnbr } from 'lintroll';

export default defineConfig([
	...pvtnbr(),

	// Renovate config (JSONC)
	{
		files: ['default.json'],
		rules: {
			'jsonc/no-comments': 'off',
		},
	},
]);
