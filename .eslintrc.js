module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': ['warn', { allow: ['warn'] }],
        '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        '@typescript-eslint/explicit-module-boundary-types': [
            'warn',
            {
                allowedNames: [
                    'render',
                    'componentDidMount',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    'shouldComponentUpdate',
                ],
            },
        ],
    },
    ignorePatterns: ['.eslintrc.js'],
};