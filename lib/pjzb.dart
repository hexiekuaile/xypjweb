import 'package:flutter/material.dart';
import 'dart:math';

class Pjzb extends StatefulWidget {
  @override
  _PjzbState createState() => _PjzbState();
}

class _PjzbState extends State<Pjzb> {
  // //默认一页行数
  int _defalutRowPageCount = PaginatedDataTable.defaultRowsPerPage;
  MyTable table = MyTable();

  @override
  Widget build(BuildContext context) {
    return paginatedDataTable();
  }

  Widget paginatedDataTable() {
    //分页表
    return SingleChildScrollView(
        child: PaginatedDataTable(
      header: Text('环境信用评价指标'),
      rowsPerPage: _defalutRowPageCount,
      onRowsPerPageChanged: (value) {
        setState(() {
          _defalutRowPageCount = value;
        });
      },
      initialFirstRowIndex: 0,
      availableRowsPerPage: [5, 10],
      onPageChanged: (value) {
        print('翻页： $value');
      },
      columns: getColumn(),
      source: table,
    ));
  }

  List<DataColumn> getColumn() {
    return [
      DataColumn(
        label: Text('分类'),        
      ),
      DataColumn(
        label: Text('指标名称'),
      ),
      DataColumn(
        label: Text('分值'),
      ),
      DataColumn(
        numeric: true,
        label: Text('支撑材料'),
      ),
    ];
  }
}

getDate() {
  List<Mybean> list = List<Mybean>();
  for (int i = 0; i < 50; i++) {
    String sex = Random().nextInt(2) > 0 ? '男' : '女';
    list.add(Mybean('高三五班', '学生${i + 1}', sex, Random().nextInt(3) + 15));
  }
  return list;
}

class MyTable extends DataTableSource {
  //获取数据集合
  List<Mybean> dataList = getDate();

  @override
  DataRow getRow(int index) {
    //根据索引获取内容行
    if (index >= dataList.length || index < 0) throw FlutterError('取错数据了。');
    //如果索引不在商品列表里面，抛出一个异常
    final Mybean bean = dataList[index];
    return DataRow.byIndex(
      cells: <DataCell>[
        DataCell(Text('${bean.a}')),
        DataCell(Text('${bean.b}')),
        DataCell(Text('${bean.c}')),
        DataCell(Text('${bean.d}')),
      ],
      index: index,
    );
  }

  @override //是否行数 不确定
  bool get isRowCountApproximate => false;

  @override //有多少行
  // int get rowCount => dataList.length;
  int get rowCount => dataList.length;

  @override //选中的行数
  int get selectedRowCount => 0;
}

class Mybean {
  final String a;
  final String b;
  final String c;
  final int d;
  Mybean(
    this.a,
    this.b,
    this.c,
    this.d,
  );
}
