const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

let debug = process.env.NODE_ENV !== 'production';

function genExecution(name, input, output, lib = "") {
    const setting = {
        devtool: debug ? 'inline-source-map' : false,
        mode: debug ? 'development' : 'production',
        optimization: {
            // We no not want to minimize our code.
            minimize: !debug
        },
        entry: {
            [name]: input,
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.webpack.json",
                        transpileOnly: true,
                        happyPackMode: true
                    },
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: debug ? name + '.js' : name + '.js',
            path: path.resolve(__dirname, output),
        },
        plugins: [new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
        })]
    };
    if (lib) {
        setting.output.library = lib;
        setting.output.libraryTarget = "var";
        setting.output.libraryExport = 'default';

    }
    return setting;
}

module.exports = [
    genExecution("table", '/src/Table.ts', "./dist", 'Table')
];
