const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .version();

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@views": path.resolve(__dirname, "resources/js/views"),
            "@layouts": path.resolve(__dirname, "resources/js/layouts"),
            "@components": path.resolve(__dirname, "resources/js/components"),
            "@constants": path.resolve(__dirname, "resources/js/constants"),
            "@services": path.resolve(__dirname, "resources/js/services"),
        },
    },
});
