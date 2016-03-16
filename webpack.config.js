module.exports = {
    entry: './app/app.js',
    output: {filename: './app.js'},
    watchOptions: {
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
};