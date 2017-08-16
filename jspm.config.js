SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "web-env/": "src/"
  },
  browserConfig: {
    "baseURL": "/dist"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "web-env": {
      "main": "index.js",
      "meta": {
        "*.js": "plugin-babel"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
