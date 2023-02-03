module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jquery": true,
    },
    //この設定内で設定があるため、ecmafeaturesは不要
    "extends": "eslint:recommended",
    "rules" : {
        "semi" : [0, "always"],
        //import後利用しないとエラーをoff
        "no-unused-vars": "off",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    }
}
