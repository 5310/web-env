SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
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
  map: {
    "preact": "npm:preact@8.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "skatejs": "npm:skatejs@4.6.7",
    "skatejs-web-components": "npm:skatejs-web-components@0.0.1"
  },
  packages: {
    "npm:skatejs-web-components@0.0.1": {
      "map": {
        "shadycss": "github:webcomponents/shadycss@1.0.5",
        "template": "github:webcomponents/template@1.0.0"
      }
    },
    "npm:skatejs@4.6.7": {
      "map": {
        "incremental-dom": "npm:incremental-dom@0.4.1"
      }
    }
  }
});
