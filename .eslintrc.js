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
    "import/no-extraneous-dependencies": 0,
    "react/default-props-match-prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/no-array-index-key": 0,
    "react/display-name": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-did-mount-set-state": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/forbid-prop-types": 1,
    "react/jsx-filename-extension": 1,
    "react/no-did-update-set-state": 0
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
