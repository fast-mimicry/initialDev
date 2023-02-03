module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    //この設定内で設定があるため、ecmafeaturesは不要
    "extends": [
        "eslint:recommended"
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
        "no-undef":"error"
    }
}
