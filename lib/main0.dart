import 'package:flutter/material.dart';
import 'm.dart';
import 'childItemView.dart';
import 'pjbzView.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: M.appName,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BotomeMenumBarPage(),
    );
  }
}

class BotomeMenumBarPage extends StatefulWidget {
  BotomeMenumBarPage();

  @override
  BotomeMenumBarPageState createState() => BotomeMenumBarPageState();
}

class BotomeMenumBarPageState extends State<BotomeMenumBarPage> {
  BotomeMenumBarPageState();

  @override
  Widget build(BuildContext context) {
    return buildBottomTabScaffold();
  }

  //当前显示页面的
  int currentIndex = 0;
  //点击导航项是要显示的页面
  final pages = [
    ChildItemView("首页"),
    PjbzView(),
    ChildItemView("评价"),
    ChildItemView("我的")
  ];

  Widget buildBottomTabScaffold() {
    return SizedBox(
        height: 100,
        child: Scaffold(
          //对应的页面
          body: pages[currentIndex],
          //appBar: AppBar(title: const Text('Bottom App Bar')),
          //悬浮按钮的位置
          floatingActionButtonLocation:
              FloatingActionButtonLocation.centerDocked,
          //悬浮按钮
          floatingActionButton: FloatingActionButton(
            child: const Icon(Icons.add),
            onPressed: () {
              print("add press ");
            },
          ),
          //其他菜单栏
          bottomNavigationBar: BottomAppBar(
            //悬浮按钮 与其他菜单栏的结合方式
            shape: CircularNotchedRectangle(),
            // FloatingActionButton和BottomAppBar 之间的差距
            notchMargin: 6.0,
            color: Colors.blue,
            child: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                buildBotomItem(currentIndex, 0, Icons.home, "首页"),
                buildBotomItem(currentIndex, 1, Icons.library_music, "标准"),
                //buildBotomItem(currentIndex, -1, null, "发现"),
                buildBotomItem(currentIndex, 2, Icons.email, "评价"),
                buildBotomItem(currentIndex, 3, Icons.person, "我的"),
              ],
            ),
          ),
        ));
  }

// ignore: slash_for_doc_comments
  /**
  * @param selectIndex 当前选中的页面
  * @param index 每个条目对应的角标
  * @param iconData 每个条目对就的图标
  * @param title 每个条目对应的标题
  */
  buildBotomItem(int selectIndex, int index, IconData iconData, String title) {
    //未选中状态的样式
    TextStyle textStyle = TextStyle(fontSize: 12.0, color: Colors.grey);
    MaterialColor iconColor = Colors.grey;
    double iconSize = 20;
    EdgeInsetsGeometry padding = EdgeInsets.only(top: 5.0);

    if (selectIndex == index) {
      //选中状态的文字样式
      textStyle = TextStyle(fontSize: 13.0, color: Colors.blue);
      //选中状态的按钮样式
      iconColor = Colors.blue;
      iconSize = 25;
      padding = EdgeInsets.only(top: 10.0);
    }
    Widget padItem = SizedBox();
    if (iconData != null) {
      padItem = Padding(
        padding: padding,
        child: Container(
          color: Colors.white,
          child: Center(
            child: Column(
              children: <Widget>[
                Icon(
                  iconData,
                  color: iconColor,
                  size: iconSize,
                ),
                Text(
                  title,
                  style: textStyle,
                )
              ],
            ),
          ),
        ),
      );
    }
    Widget item = Expanded(
      flex: 1,
      child: new GestureDetector(
        onTap: () {
          if (index != currentIndex) {
            setState(() {
              currentIndex = index;
            });
          }
        },
        child: SizedBox(
          height: 52,
          child: padItem,
        ),
      ),
    );
    return item;
  }
}
