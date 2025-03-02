module.exports = {
  root: true, // Important: Ensures ESLint looks for this config file in the root
  extends: [
    '@react-native-community/eslint-config',
    'airbnb', // Or your preferred style guide (e.g., 'airbnb-base' if not using JSX)
    'prettier', // Make sure prettier is always last to override conflicting rules
  ],
  parser: '@typescript-eslint/parser', // Only if using TypeScript
  plugins: ['@typescript-eslint'], // Only if using TypeScript
  rules: {
    // React rules
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']}, // Correct for TypeScript projects
    ],
    'react/react-in-jsx-scope': 'off', // Correct for React 17 and later
    'react/jsx-props-no-spreading': 'warn', // Consider adding this to discourage prop spreading

    // General JavaScript/TypeScript rules
    'no-unused-vars': 'warn', // Or 'error' - helps catch potential bugs
    semi: ['error', 'always'], // Enforce semicolons
    'no-console': 'warn', // Good practice to avoid committing console.log statements
    'no-unused-expressions': 'warn', // Catches expressions that don't do anything
    'import/order': 'warn', // Helps maintain consistent import order
    'import/no-unresolved': 'error', // Enforces that all imports resolve (important!)
    'import/extensions': [
      'error',
      'always',
      {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'},
    ], // Consistent import extensions
    'no-shadow': 'off', // Disabled in favor of the Typescript rule below
    '@typescript-eslint/no-shadow': ['error'], // Prevents variable shadowing (if using TypeScript)
    'no-use-before-define': 'off', // Disabled in favor of the Typescript rule below
    '@typescript-eslint/no-use-before-define': ['error'], // Prevents use before define (if using TypeScript)

    // Accessibility rules (if you have the jsx-a11y plugin installed)
    'jsx-a11y/accessible-emoji': 'warn', // Encourages accessible emojis
    'jsx-a11y/alt-text': 'warn', // Ensures images have alt text
    'jsx-a11y/click-events-have-key-events': 'warn', // Ensures clickables are accessible by keyboard
    'jsx-a11y/no-autofocus': 'warn', // Prevents autofocus, which can be bad for accessibility

    // Add any other rules you want to enforce
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Important for resolving imports
      },
      alias: {
        map: [
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@assets', './src/assets'],
          ['@utils', './src/utils'],
          ['@redux', './src/redux'],
          ['@services', './src/services'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
  },
  env: {
    commonjs: true, // Add this to allow CommonJS style in config files.
    node: true, // Add this to allow Node.js globals
  },
};
