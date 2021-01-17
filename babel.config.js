module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        '~': './src',
                    },
                },
            ],
        ],
        env: {
            production: {
                plugins: ['react-native-paper/babel'],
            },
        },
    };
};
