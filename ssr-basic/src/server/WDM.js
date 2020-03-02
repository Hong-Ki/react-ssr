import webpackDevMiddleware from "webpack-dev-middleware";

const WDM = (compiler = null) =>
  compiler
    ? webpackDevMiddleware(compiler, {
        // lazy가 true일 경우, request가 있을 때만 reload.
        lazy: false,

        // watch options (only lazy: false)
        watchOptions: {
          aggregateTimeout: 150,
          poll: true
        },

        // 빌드된 소스가 올라갈 memory path
        //publicPath: compiler.publicPath,
        publicPath: "/build",

        stats: {
          colors: true
        },
        //logLevel: "silent",
        serverSideRender: true
      })
    : new Error("compiler is null");

export default WDM;
