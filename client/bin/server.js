const Koa = require("koa");
const webpack = require("webpack");
const koaWebpackMiddleware = require("koa-webpack-middleware");
const path = require("path");
const fs = require("fs");

const config = require(path.resolve(__dirname, "../webpack.config"));

const PORT = process.env.PORT || 3000;

const app = new Koa();
const compiler = webpack(config);
const options = {
    publicPath: config.output.publicPath,
    stats: {
        color: true
    },
    hot: true
};

app.use(koaWebpackMiddleware.devMiddleware(compiler, options));

app.use(koaWebpackMiddleware.hotMiddleware(compiler));

app.use(async(ctx) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(path.resolve(__dirname, "./index.html"));
});

app.listen(PORT, () => {
    console.log(`server hosting on port: ${PORT}`);
});