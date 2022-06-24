module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	ignorePatterns: ['.eslintrc.cjs'],

	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension

			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				'airbnb-typescript',
			],

			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
			plugins: [
				'@typescript-eslint',
			],
			rules: {
				// rule for working with tabs as intends instead of spaces
				'@typescript-eslint/indent': [2, 'tab'],
			},
		},
		{
			files: ['*.js', '*.cjs', '*.jsx'],

			extends: [
				'airbnb-base',
			],

			rules: {
				// rule for correct work with windows style of breaking lines - CRLF
				'linebreak-style': ['error', 'windows'],
				// rule for working with tabs as intends instead of spaces
				// also here is addition to "switch/case" construction
				indent: [2, 'tab', { SwitchCase: 1 }],
				'no-tabs': 0,
			},
		},
	],

};
