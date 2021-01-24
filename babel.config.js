module.exports = function (api) {

    const presets = [
        [ "@babel/preset-env",
            {
                targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                }
            }
        ],
        /*[ "@babel/preset-react",
            {
                "pragma": "dom",          // default pragma is React.createElement
                "pragmaFrag": "DomFrag",  // default is React.Fragment
                "throwIfNamespace": false // defaults to true
            }
        ]*/
    ];

    const plugins = [
        /*"@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        [ "module-resolver", 
            {
                "root": ["./lib"]
            }
        ]*/
    ];

    api.cache.forever();
    
    return {
        presets,
        plugins
    };
};