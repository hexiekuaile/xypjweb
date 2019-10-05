define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/xypjweb/childItemView', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__xypjweb__childItemView, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const floating_action_button_location = packages__flutter__material.src__material__floating_action_button_location;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const bottom_app_bar = packages__flutter__material.src__material__bottom_app_bar;
  const icons = packages__flutter__material.src__material__icons;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const childItemView = packages__xypjweb__childItemView.childItemView;
  const notched_shapes = packages__flutter__src__painting___network_image_web.src__painting__notched_shapes;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const main = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfChildItemView = () => (JSArrayOfChildItemView = dart.constFn(_interceptors.JSArray$(childItemView.ChildItemView)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 17,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 7,
        line: 12,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 13,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 14,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 17,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 12,
        line: 11,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "_title",
        column: 19,
        line: 41,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 5,
        line: 41,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "_title",
        column: 19,
        line: 42,
        file: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C12 || CT.C12,
        name: null,
        column: 5,
        line: 42,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "_title",
        column: 19,
        line: 43,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 5,
        line: 43,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "_title",
        column: 19,
        line: 44,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 5,
        line: 44,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: icon_data.IconData.prototype,
        matchTextDirection: false,
        fontPackage: null,
        fontFamily: "MaterialIcons",
        codePoint: 57669
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: icon.Icon.prototype,
        key: null,
        textDirection: null,
        semanticLabel: null,
        color: null,
        size: null,
        icon: C21 || CT.C21
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 59,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 60,
        file: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C23 || CT.C23,
        name: null,
        column: 33,
        line: 58,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 15,
        line: 72,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 15,
        line: 73,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 74,
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
        column: 20,
        line: 71,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "shape",
        column: 13,
        line: 67,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "notchMargin",
        column: 13,
        line: 69,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 13,
        line: 70,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 71,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 32,
        line: 65,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 11,
        line: 52,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "floatingActionButtonLocation",
        column: 11,
        line: 55,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "floatingActionButton",
        column: 11,
        line: 58,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottomNavigationBar",
        column: 11,
        line: 65,
        file: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C38 || CT.C38,
        name: null,
        column: 16,
        line: 50,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 49,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 50,
        file: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C44 || CT.C44,
        name: null,
        column: 12,
        line: 48,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 22,
        line: 108,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 19,
        line: 118,
        file: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 19,
        line: 119,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 19,
        line: 120,
        file: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C49 || CT.C49,
        name: null,
        column: 17,
        line: 117,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 123,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 19,
        line: 124,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 17,
        line: 122,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 116,
        file: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C58 || CT.C58,
        name: null,
        column: 20,
        line: 115,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 115,
        file: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C61 || CT.C61,
        name: null,
        column: 18,
        line: 114,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 11,
        line: 113,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 114,
        file: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C64 || CT.C64,
        name: null,
        column: 16,
        line: 112,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 9,
        line: 111,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 112,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 17,
        line: 110,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 143,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 144,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 16,
        line: 142,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 9,
        line: 135,
        file: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 142,
        file: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C76 || CT.C76,
        name: null,
        column: 18,
        line: 134,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 7,
        line: 133,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 134,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 19,
        line: 132,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 23,
        line: 5,
        file: "org-dartlang-app:///packages/xypjweb/main.dart"
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  let C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "环境信用评价", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.BotomeMenumBarPage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
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
  main.BotomeMenumBarPage = class BotomeMenumBarPage extends framework.StatefulWidget {
    createState() {
      return new main.BotomeMenumBarPageState.new();
    }
  };
  (main.BotomeMenumBarPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.BotomeMenumBarPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.BotomeMenumBarPage.prototype;
  dart.addTypeTests(main.BotomeMenumBarPage);
  dart.setMethodSignature(main.BotomeMenumBarPage, () => ({
    __proto__: dart.getMethods(main.BotomeMenumBarPage.__proto__),
    createState: dart.fnType(main.BotomeMenumBarPageState, [])
  }));
  dart.setLibraryUri(main.BotomeMenumBarPage, "package:xypjweb/main.dart");
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C18;
  let C17;
  let C21;
  let C20;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C34;
  let C35;
  let C36;
  let C32;
  let C31;
  let C39;
  let C40;
  let C41;
  let C42;
  let C38;
  let C37;
  let C45;
  let C46;
  let C44;
  let C43;
  let C47;
  let C50;
  let C51;
  let C52;
  let C49;
  let C48;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C58;
  let C57;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C72;
  let C71;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  main.BotomeMenumBarPageState = class BotomeMenumBarPageState extends framework.State$(main.BotomeMenumBarPage) {
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get pages() {
      return this[pages];
    }
    set pages(value) {
      super.pages = value;
    }
    build(context) {
      return this.buildBottomTabScaffold();
    }
    buildBottomTabScaffold() {
      return new basic.SizedBox.new({height: 100.0, child: new scaffold.Scaffold.new({body: this.pages[$_get](this.currentIndex), floatingActionButtonLocation: floating_action_button_location.FloatingActionButtonLocation.centerDocked, floatingActionButton: new floating_action_button.FloatingActionButton.new({child: C20 || CT.C20, onPressed: dart.fn(() => {
              core.print("add press ");
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), bottomNavigationBar: new bottom_app_bar.BottomAppBar.new({shape: new notched_shapes.CircularNotchedRectangle.new(), notchMargin: 6.0, color: colors.Colors.blue, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([framework.Widget._check(this.buildBotomItem(this.currentIndex, 0, icons.Icons.home, "首页")), framework.Widget._check(this.buildBotomItem(this.currentIndex, 1, icons.Icons.library_music, "发现")), framework.Widget._check(this.buildBotomItem(this.currentIndex, 2, icons.Icons.email, "消息")), framework.Widget._check(this.buildBotomItem(this.currentIndex, 3, icons.Icons.person, "我的"))]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
    }
    buildBotomItem(selectIndex, index, iconData, title) {
      let textStyle = new text_style.TextStyle.new({fontSize: 12.0, color: colors.Colors.grey});
      let iconColor = colors.Colors.grey;
      let iconSize = 20.0;
      let padding = new edge_insets.EdgeInsets.only({top: 5.0});
      if (selectIndex == index) {
        textStyle = new text_style.TextStyle.new({fontSize: 13.0, color: colors.Colors.blue});
        iconColor = colors.Colors.blue;
        iconSize = 25.0;
        padding = new edge_insets.EdgeInsets.only({top: 10.0});
      }
      let padItem = new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C47 || CT.C47});
      if (iconData != null) {
        padItem = new basic.Padding.new({padding: padding, child: new container.Container.new({color: colors.Colors.white, child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new icon.Icon.new(iconData, {color: iconColor, size: iconSize, $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new text.Text.new(title, {style: textStyle, $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
      }
      let item = new basic.Expanded.new({flex: 1, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
            if (index != this.currentIndex) {
              this.setState(dart.fn(() => {
                this.currentIndex = index;
              }, VoidToNull()));
            }
          }, VoidToNull()), child: new basic.SizedBox.new({height: 52.0, child: padItem, $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
      return item;
    }
  };
  (main.BotomeMenumBarPageState.new = function() {
    this[currentIndex] = 0;
    this[pages] = JSArrayOfChildItemView().of([new childItemView.ChildItemView.new("首页", {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new childItemView.ChildItemView.new("发现", {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new childItemView.ChildItemView.new("消息", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new childItemView.ChildItemView.new("我的", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17})]);
    main.BotomeMenumBarPageState.__proto__.new.call(this);
    ;
  }).prototype = main.BotomeMenumBarPageState.prototype;
  dart.addTypeTests(main.BotomeMenumBarPageState);
  const currentIndex = Symbol("BotomeMenumBarPageState.currentIndex");
  const pages = Symbol("BotomeMenumBarPageState.pages");
  dart.setMethodSignature(main.BotomeMenumBarPageState, () => ({
    __proto__: dart.getMethods(main.BotomeMenumBarPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    buildBottomTabScaffold: dart.fnType(framework.Widget, []),
    buildBotomItem: dart.fnType(dart.dynamic, [core.int, core.int, icon_data.IconData, core.String])
  }));
  dart.setLibraryUri(main.BotomeMenumBarPageState, "package:xypjweb/main.dart");
  dart.setFieldSignature(main.BotomeMenumBarPageState, () => ({
    __proto__: dart.getFields(main.BotomeMenumBarPageState.__proto__),
    currentIndex: dart.fieldType(core.int),
    pages: dart.finalFieldType(core.List$(childItemView.ChildItemView))
  }));
  let C83;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C83 || CT.C83}));
  };
  dart.trackLibraries("packages/xypjweb/main", {
    "package:xypjweb/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,sDACuB,+BAErB,yCACiB,4BAElB;IAEV;;;;;;EACF;;;;;;;;;AAM2C;IAAyB;;;;AAHlE;;EAAoB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAehB;;;;;;IAEE;;;;;;UAPoB;AACxB,YAAO;IACT;;AAaE,YAAO,iCACK,cACD,iCAEC,AAAK,kBAAC,kDAIqB,iGAEX,sFAET;cACT,WAAM;4GAIW,4CAEZ,gEAEM,YACC,2BACP,iCACsB,0CACU,8CACnB,8CAChB,oBAAe,mBAAc,GAAS,kBAAM,gCAC5C,oBAAe,mBAAc,GAAS,2BAAe,gCAErD,oBAAe,mBAAc,GAAS,mBAAO,gCAC7C,oBAAe,mBAAc,GAAS,oBAAQ;IAK5D;mBASmB,aAAiB,OAAgB,UAAiB;AAEzD,sBAAY,wCAAoB,aAAoB;AAChD,sBAAmB;AAC1B,qBAAW;AACC,oBAAqB,sCAAU;AAElD,UAAI,AAAY,WAAD,IAAI,KAAK;QAEtB,YAAY,wCAAoB,aAAoB;QAEpD,YAAmB;QACnB,WAAW;QACX,UAAqB,sCAAU;;AAE1B,oBAAU;AACjB,UAAI,QAAQ,IAAI;QACd,UAAU,gCACC,OAAO,SACT,oCACS,4BACP,6BACE,gCACa,sBAChB,kBACE,QAAQ,UACD,SAAS,QACV,QAAQ,2DAEhB,kBACE,KAAK,UACE,SAAS;;AAQvB,iBAAO,8BACN,UACK,iDACF;AACL,gBAAI,KAAK,IAAI;cACX,cAAS;gBACP,oBAAe,KAAK;;;mCAInB,gCACG,aACD,OAAO;AAIpB,YAAO,KAAI;IACb;;;IA/GI,qBAAe;IAEb,cAAQ,6BACZ,oCAAc,8DACd,oCAAc,gEACd,oCAAc,gEACd,oCAAc;AAdhB;;EAAyB;;;;;;;;;;;;;;;;;;AAzBZ,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
