module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        // "node": true
    },
    //この設定内で設定があるため、ecmafeaturesは不要
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    "plugins": [
        //package.jsonの"eslint-plugin-react": "^7.31.11"が設定される
        "react"
    ],
    "rules": {
        "semi":["error", "always"],
        "quotes": ["error", "always"],
        "react/prop-types": "error",
        "no-undef":"error"
    }
}
