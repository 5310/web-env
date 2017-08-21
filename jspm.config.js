SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {},
  packages: {}
});
