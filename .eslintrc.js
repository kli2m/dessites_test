module.exports = {
    "parser": "@babel/eslint-parser",
    "extends": ["airbnb", "prettier"],
    "rules": {
        "no-unused-vars": 0,
        "no-console": "off",
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ],
        "no-param-reassign": [2, { "props": false }]
    },
    "env": {
        "browser": true,
        "node": true
    }
}