module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "overrides": [
    {
      "files": [ "pc/components/**/*.jsx" ],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": [ 2, "single" ]
      }
    }
  ],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      2,
      {
        "singleQuote": true,
        "semi": true
      },
    ],
    "comma-dangle": 0,
    "react/default-props-match-prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "react/jsx-filename-extension": 1
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
