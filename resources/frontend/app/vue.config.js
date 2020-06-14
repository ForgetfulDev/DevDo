module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 100000,
                maxSize: 350000
            }
        }
    },
    pluginOptions: {
        storybook: {
            allowedPlugins: ["define"]
        }
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: "../../../public",
    publicPath: "/",

    // modify the location of the generated HTML file.
    indexPath: "../resources/views/home.blade.php",
    pwa: {
        name: "DevDo",
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: "/",
            skipWaiting: true
        }
    }
};
