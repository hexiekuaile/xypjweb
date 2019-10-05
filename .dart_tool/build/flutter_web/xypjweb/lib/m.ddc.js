define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const m = Object.create(dart.library);
  const CT = Object.create(null);
  m.M = class M extends core.Object {};
  (m.M.new = function() {
    ;
  }).prototype = m.M.prototype;
  dart.addTypeTests(m.M);
  dart.setLibraryUri(m.M, "package:xypjweb/m.dart");
  dart.defineLazy(m.M, {
    /*m.M.appName*/get appName() {
      return "环境信用评价";
    },
    /*m.M.pjbz*/get pjbz() {
      return "评价标准";
    },
    /*m.M.pj*/get pj() {
      return "评价";
    },
    /*m.M.pjjg*/get pjjg() {
      return "评价结果";
    },
    /*m.M.home*/get home() {
      return "开始";
    }
  });
  dart.trackLibraries("packages/xypjweb/m", {
    "package:xypjweb/m.dart": m
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["m.dart"],"names":[],"mappings":";;;;;;;;;;EAMA;;;;MALsB,WAAO;;;MACP,QAAI;;;MACJ,MAAE;;;MACF,QAAI;;;MACJ,QAAI","file":"m.ddc.js"}');
  // Exports:
  return {
    m: m
  };
});

//# sourceMappingURL=m.ddc.js.map
