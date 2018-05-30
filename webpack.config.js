// Webpack v4
const NODE_ENV = process.env.NODE_ENV;
const DEV_MODE = NODE_ENV === 'development';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const rimraf = require('rimraf');


module.exports = {
    entry: {main: './assets/templates/main.js'},
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/src/',
        filename: 'js/[name]' + (DEV_MODE ? '.js' : '.[hash].min.js'),
        chunkFilename: '[id]' + (DEV_MODE ? '.js' : '.[hash].min.js'),
        library: '[name]',
    },
    devtool: DEV_MODE ? 'source-map' : false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'resolve-url-loader'
                    }
                ]
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: !DEV_MODE,
                                }
                            }, {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers: ['ie >= 8', 'last 4 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            }, {
                                loader: 'resolve-url-loader'
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
            },
            // Image Loader
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './icons/',
                            name: '[name].[hash:6].[ext]',
                            publicPath: '/src/icons/'

                        }
                    }
                ]
            },
            // Font Loader
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './fonts/',
                            name: '[name].[hash:6].[ext]',
                            publicPath: '/src/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        {
            apply: (compiler) => {
                if (!DEV_MODE) {
                    rimraf.sync(compiler.options.output.path);
                }
            }
        },
        new ExtractTextPlugin({
            filename: 'css/[name]' + (DEV_MODE ? '.css' : '.[hash].min.css'),
            disable: false,
            allChunks: true
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(__dirname, 'src')
        })
    ]
};

