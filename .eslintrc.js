module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "warn",
        "react/jsx-key": "warn",
        "react/no-unknown-property": "warn",
        'linebreak-style': [
            'warn',
            'windows'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ], "no-restricted-globals": ["warn", "self"],
        "react/prop-types": [
            "warn",
            {
              "ignore": ["checkList.some"]
            }
          ]
    }
};
