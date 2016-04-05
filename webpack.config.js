module.exports = {
    entry: './app/main',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.scss$/, loader: 'raw!sass'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.woff$/, loader: 'raw'},
            {test: /\.woff2$/, loader: 'raw'},
            {test: /\.eot$/, loader: 'raw'},
            {test: /\.svg$/, loader: 'raw'},
            {test: /\.ttf$/, loader: 'raw'}
        ]
    }
};