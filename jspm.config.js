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
  map: {
    "preact": "npm:preact@8.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "skatejs": "npm:skatejs@5.0.0-alpha.16"
  },
  packages: {}
});
