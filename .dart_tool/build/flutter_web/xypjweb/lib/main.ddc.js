define(['dart_sdk', 'packages/flutter/material', 'packages/xypjweb/m', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__xypjweb__m, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icons = packages__flutter__material.src__material__icons;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const theme = packages__flutter__material.src__material__theme;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const m = packages__xypjweb__m.m;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfString = () => (PopupMenuButtonOfString = dart.constFn(popup_menu.PopupMenuButton$(core.String)))();
  let PopupMenuItemOfString = () => (PopupMenuItemOfString = dart.constFn(popup_menu.PopupMenuItem$(core.String)))();
  let JSArrayOfPopupMenuItemOfString = () => (JSArrayOfPopupMenuItemOfString = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfString())))();
  let ListOfPopupMenuItemOfString = () => (ListOfPopupMenuItemOfString = dart.constFn(core.List$(PopupMenuItemOfString())))();
  let BuildContextToListOfPopupMenuItemOfString = () => (BuildContextToListOfPopupMenuItemOfString = dart.constFn(dart.fnType(ListOfPopupMenuItemOfString(), [framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 24,
        line: 16,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 16,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 7,
        line: 11,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 12,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 13,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 16,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 12,
        line: 10,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 29,
        line: 43,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 18,
        line: 43,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 28,
        line: 44,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 16,
        line: 44,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 32,
        line: 47,
        file: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C16 || CT.C16,
        name: null,
        column: 21,
        line: 47,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 15,
        line: 47,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tooltip",
        column: 15,
        line: 48,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 15,
        line: 49,
        file: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C19 || CT.C19,
        name: null,
        column: 11,
        line: 46,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 39,
        line: 50,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 28,
        line: 50,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 22,
        line: 50,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tooltip",
        column: 46,
        line: 50,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 61,
        line: 50,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 11,
        line: 50,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 70,
        line: 53,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 63,
        line: 53,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 43,
        line: 53,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 56,
        line: 53,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 21,
        line: 53,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 72,
        line: 54,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 65,
        line: 54,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 43,
        line: 54,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 58,
        line: 54,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 21,
        line: 54,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemBuilder",
        column: 15,
        line: 52,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelected",
        column: 15,
        line: 56,
        file: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C46 || CT.C46,
        name: null,
        column: 11,
        line: 51,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 9,
        line: 43,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 9,
        line: 44,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 9,
        line: 45,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 15,
        line: 42,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 73,
        file: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C55 || CT.C55,
        name: null,
        column: 13,
        line: 72,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 26,
        line: 76,
        file: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 15,
        line: 77,
        file: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C58 || CT.C58,
        name: null,
        column: 13,
        line: 75,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 11,
        line: 70,
        file: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 71,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 16,
        line: 69,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 69,
        file: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C66 || CT.C66,
        name: null,
        column: 13,
        line: 68,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 27,
        line: 85,
        file: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C69 || CT.C69,
        name: null,
        column: 16,
        line: 85,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 83,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tooltip",
        column: 9,
        line: 84,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 85,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 29,
        line: 82,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 7,
        line: 42,
        file: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 68,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "floatingActionButton",
        column: 7,
        line: 82,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 12,
        line: 41,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C82() {
      return C82 = dart.constList([], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C82 || CT.C82,
        name: null,
        column: 23,
        line: 4,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: m.M.appName, theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.MyHomePage.new({title: m.M.appName, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:xypjweb/main.dart");
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  const title$ = Symbol("MyHomePage.title");
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:xypjweb/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _counter = dart.privateName(main, "_counter");
  const _incrementCounter = dart.privateName(main, "_incrementCounter");
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C66;
  let C65;
  let C70;
  let C69;
  let C68;
  let C73;
  let C74;
  let C75;
  let C72;
  let C71;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = dart.notNull(this[_counter]) + 1;
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit_attributes, {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), tooltip: m.M.pjbz, onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit, {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), tooltip: m.M.pj, onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new (PopupMenuButtonOfString()).new({itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([new (PopupMenuItemOfString()).new({value: "pj", child: new text.Text.new(m.M.pj, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new (PopupMenuItemOfString()).new({value: "PJJG", child: new text.Text.new(m.M.pjjg, {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), BuildContextToListOfPopupMenuItemOfString()), onSelected: dart.fn(action => {
                switch (action) {
                  case "pj":
                  {
                    break;
                  }
                  case "pjjg":
                  {
                    break;
                  }
                }
              }, StringToNull()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45})]), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("You have pushed the button this many times:", {$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new text.Text.new(dart.str(this[_counter]), {style: theme.Theme.of(context).textTheme.display1, $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.bind(this, _incrementCounter), tooltip: "Increment", child: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
  };
  (main._MyHomePageState.new = function() {
    this[_counter] = 0;
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, "package:xypjweb/main.dart");
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_counter]: dart.fieldType(core.int)
  }));
  let C82;
  let C81;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C81 || CT.C81}));
  };
  dart.trackLibraries("packages/xypjweb/main", {
    "package:xypjweb/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,sDACuB,cACnB,oBACF,yCACiB,4BAElB,gCAAoB;IAE9B;;;;;;EACF;;;;;;;;IAKe;;;;;;;AAGqB;IAAkB;;;QALpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAYjD,cAAS;QACP,iBAAQ,aAAR,kBAAQ;;IAEZ;UAG0B;AACxB,YAAO,oCACG,iCACG,kBAAW,iFACb,kBAAK,AAAO,sFACF,sBACf,sCACU,kBAAW,gGACN,qBACA;yFACf,sCAAiB,kBAAW,qFAAkB,mBAAe;yFAC7D,kDACiB,QAAc,WAAmC,qCACxD,0CAA6B,aAAa,kBAAO,2HACjD,0CAA6B,eAAe,kBAAO,yLAE7C,QAAQ;wBACV,MAAM;;;AAGV;;;;AAGA;;;4JAKR,6BACG,yCACgC,yCACnB,sBAChB,kBACE,yGAEF,kBACa,SAAT,yBACW,AAAY,AAAU,eAAnB,OAAO,yNAKT,0EACT,mCACF,oBACF,kBAAW;IAGxB;;;IAzDI,iBAAW;;;EA0DjB;;;;;;;;;;;;;;;AArFe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
