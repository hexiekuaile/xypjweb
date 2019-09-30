import 'package:flutter/material.dart';
import 'm.dart';

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
      home: MyHomePage(title: M.appName),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.home),
        title: Text(widget.title),
        actions: getAppbar(context),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

List<Widget> getAppbar(BuildContext context) {
  return <Widget>[
    IconButton(
        icon: Icon(Icons.edit_attributes), tooltip: M.pjbz, onPressed: () {}),
    IconButton(icon: Icon(Icons.edit), tooltip: M.pj, onPressed: () {}),
    PopupMenuButton<String>(
        itemBuilder: (BuildContext context) => <PopupMenuItem<String>>[
              PopupMenuItem<String>(value: "pj", child: ListTile(leading: Icon(Icons.account_circle),title: Text(M.pj),)),
              PopupMenuItem<String>(value: "PJJG", child: ListTile(leading: Icon(Icons.add_to_queue),title: Text(M.pjjg),)),
            ],
        onSelected: (String action) {
          switch (action) {
            case "pj":
              // do nothing
              break;
            case "pjjg":
              // do nothing
              break;
          }
        })
  ];
}
