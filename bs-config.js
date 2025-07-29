module.exports = {
  server: {
    baseDir: ["src", "dist"],
    routes: {
      "/styles": "dist/styles",
    },
  },
  files: ["src/**/*", "dist/**/*"],
  watchEvents: ["change", "add", "unlink", "addDir", "unlinkDir"],
  ignore: ["node_modules"],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  codeSync: false,
};
