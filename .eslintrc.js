module.exports = {
  env: {
    es2021: true,
    "node": true,
    "react-native/react-native": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "prettier",
      "plugin:import/typescript",
      "plugin:jest/recommended"
  ],
  "parserOptions": {
    project: 'tsconfig.json',
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
      "prettier",
      "jest"
  ],
  rules: {
    // allow .js files to contain JSX code
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],

    // prevent eslint to complain about the "styles" variable being used before it was defined
    "no-use-before-define": ["error", { "variables": false }],

    // ignore errors for the react-navigation package
    "react/prop-types": ["error", {"ignore": ["navigation", "navigation.navigate"]}],

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
    "overrides": [
        {
            "files": [
                "**/*.spec.js",
                "**/*.spec.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};
