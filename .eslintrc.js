module.exports = {
  "env": {
    "jest": true,
    "browser": true,
    "es6": true 
},
"extends": "airbnb-base", 
"globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly" 
},
"parserOptions": { 
    "ecmaVersion": 2018, 
    "sourceType": "module"
}, 
"rules": {
    //поддерживает ++
    "no-plusplus": "off",

    //не ругается если есть вывод в консоль
    "no-console": "off",

    "no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement"
    ],

    //не ругается на разные варианты знаков 
    "no-mixed-operators": [
        "error",
        {
            "groups": [
                ["+", "*", "/", "%"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }
    ],

    //максимальная длина строки кода 200 символов, можно менять
    "max-len": [
        "error",
        { "code": 200 }
    ]
 }
};
