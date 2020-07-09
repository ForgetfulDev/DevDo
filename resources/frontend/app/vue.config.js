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
    devServer: {
        proxy: "http://devdo.local"
    },
    outputDir: "../../../public",
    publicPath: "/",
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
    },
    transpileDependencies: ["vuetify"]
};
