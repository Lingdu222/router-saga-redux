import React from 'react';
import RoleCheckbox from './RoleCheckBox';
import { Table } from 'antd';
import Map from './Map';

class RoleApplicationTable extends React.Component {
    constructor(props) {
        super(props);
        this.cid = 0;
        this.rowNum = 0;
        // this.state = {

        // };
        //map
        this.checkboxIdMapState = new Map();//checkboxId 映射 State
        this.parentRow = new Map();//每个checkboxId节点 对应最左边的哪个应用
        this.parentCol = new Map();//每个checkboxId节点 对应最上边的哪个按钮
        this.childrenRow = new Map();//当前行的所有子行
        this.checkboxIdMapData = new Map();//每个checkbox对应的 appid，btnGroupId
        //保存数据
        this.checked = null;//标识数据是 新增 还是 删除
        this.dataQueue = [];// appid，btngroupId队列
        //测试数据
        this.appData = [
            {
                name: '报表0', id: "4560", key: '8',
            },
            {
                name: '报表1', id: "456", key: '5',
            },
            {
                name: '报表2', id: "789", key: '1',
            },
            {
                name: '报表3', id: "4567", key: '2',
            },
            {
                name: '报表4', id: "7891", key: '3',
            },
            {
                name: '报表5', id: "4568", key: '4',
            },
            {
                name: '报表6', id: "7892", key: '6',
            },
        ];
        this.btnGroupColumns = [
            {
                id: '12xx3',
                name: 'kong',
                colname: 'name',
                align: 'center',
                // 直接显示第一列数据
                // render: (value, row, index) => {
                //     const obj = {
                //         children: value,
                //         props: {},
                //     };
                //     if (index === 0) {
                //         obj.props.rowSpan = 2;
                //     }
                //     if (index === 1) {
                //         obj.props.rowSpan = 2;
                //     }
                //     if (index === 2) {
                //         obj.props.rowSpan = 2;
                //     }
                //     return obj;
                // }

            },
            {
                id: '43xx5', name: '下载',
            },
            { id: '43xfffx5', name: '编辑' },
            { id: '43xfffx6', name: '删除' },
            { id: '43xfffx7', name: '新增' },
        ];
    }

    addChildrenRow = (appData) => {//添加所有子行 标识
        if (!appData) return;
        for (var i = 0; i < appData.length; ++i) {//获取行头的checkboxId
            this.rowNum++;//获取行号
            var curRowHeadCheckboxId = appData[i].name.split('_')[1];
            var childrenRow = this.childrenRow;
            if (!childrenRow.get(curRowHeadCheckboxId)) childrenRow.put(curRowHeadCheckboxId, []);
            childrenRow.get(curRowHeadCheckboxId).push(curRowHeadCheckboxId);//加入当前行
        }
    }
    // 别动啊
    addDataPid = (btnGroupColumns, appData) => {//生成新的列， 并且为非表头的每一个单元格设置固定 id，（防止表格渲染时 id发生变化）
        if (!appData) return;
        for (var i = 0; i < appData.length; ++i) {
            for (var j = 0; j < btnGroupColumns.length; ++j) {
                if (!appData[i][btnGroupColumns[j].colname]) {
                    appData[i][btnGroupColumns[j].colname] = btnGroupColumns[j].id + '_' + (++this.cid);//为这一行数据添加新的列
                    //判断应用对应的按钮是否已经选择上, judgeDefaultChecked
                    if (appData[i].select && appData[i].select[btnGroupColumns[j].id]) {//btnGroupColumns[j].id == btnGroupId
                        this.checkboxIdMapState.put(this.cid, true);
                    } else {
                        this.checkboxIdMapState.put(this.cid, false);
                    }
                } else if (btnGroupColumns[j].colname == 'name') {
                    if (appData[i][btnGroupColumns[j].colname].indexOf('_') >= 0) continue;
                    appData[i][btnGroupColumns[j].colname] += '_' + (++this.cid);
                    this.checkboxIdMapState.put(this.cid, false);
                }
            }
            this.addDataPid(btnGroupColumns, appData[i].children);

        }
    }
    addColName = (btnGroupColumns, appData) => {
        if (btnGroupColumns) {
            btnGroupColumns.map((elem) => {
                if (!elem.colname) {
                    elem.colname = elem.id;
                }
                elem.cid = ++this.cid;
            });
        }
        if (appData) {
            this.addDataPid(btnGroupColumns, appData);
            this.addChildrenRow(appData);
            // 判断应用对应的checkbox是否选中，列头对应的checkbox是否选中
            this.checkGroupAndColumnState();
        }
    }
    checkGroupAndColumnState = () => {
        const checkboxIdMapState = this.checkboxIdMapState;
        const colNum = this.colNum;
        const rowNum = this.rowNum;
        const rowState = [];
        for (var i = 0; i <= rowNum; ++i)
            rowState.push(true)//默认所有的行全选
        rowState[1] = false;

        for (var row = 2; row <= rowNum; ++row) {
            var cb = (row - 1) * colNum + 2;//这一行从第2个 checkbox 开始
            var ce = row * colNum;
            var curRowState = true;//默认这一行全选

            for (var cid = cb; cid <= ce; ++cid) {//遍历这一行
                if (checkboxIdMapState.get(cid) == false) {
                    curRowState = false;
                    break;
                }
            }
            rowState[row] = curRowState;
            // 行头是否被选中
            if (rowState[row] == true) {//应用对应的checkbox选中
                checkboxIdMapState.put((row - 1) * colNum + 1, true);
            }
            else {
                checkboxIdMapState.put((row - 1) * colNum + 1, false);
            }
        }
        // 判断列 是否被选中
        if (rowNum > 1) {
            for (var col = 1; col <= colNum; ++col) {
                var curColState = true;
                for (var cid = col + colNum; cid <= colNum * rowNum; cid += colNum) {
                    if (checkboxIdMapState.get(cid) == false) {
                        curColState = false;
                        break;
                    }
                }
                var cid = col;
                checkboxIdMapState.put(cid, curColState);//这一列的状态
            }
        }
    }

    onChecked = (cid, btnGroupId, appId, checked) => {//checkboxId, 按钮id，应用id
        const checkboxIdMapState = this.checkboxIdMapState;
        const childrenRow = this.childrenRow;
        const parentRow = this.parentRow;
        const colNum = this.colNum;
        const rowNum = this.rowNum;//
        //清空数据队列
        this.dataQueue.length = 0;
        //标识当前的操作
        this.checked = checked;

        if (btnGroupId == null && appId == null) {
            for (var cur_cid = 1; cur_cid <= colNum * rowNum; ++cur_cid) {
                checkboxIdMapState.put(cur_cid, checked);
            }
        } else if (btnGroupId == null) {//appId 不为null, 这一行全选
            // 点击每一行的行头，选中该行
            var rowHeadCheckboxIds = childrenRow.get(cid);//所有子行的行头的 checkboxId
            for (var i = 0; i < rowHeadCheckboxIds.length; ++i) {
                var cur_cid = rowHeadCheckboxIds[i];
                var cur_row_max_cid = parseInt(cur_cid) + colNum;
                while (cur_cid < cur_row_max_cid) {
                    checkboxIdMapState.put(cur_cid, checked);
                    ++cur_cid;
                }
            }
        } else if (appId == null) {//btnId不为null，这一列全部check
            var cur_cid = cid;
            while (cur_cid <= rowNum * colNum) {
                checkboxIdMapState.put(cur_cid, checked);
                cur_cid += colNum;
            }
        } else {//都不为null
            var curRowHeadCheckboxId = parentRow.get(cid);//通过cid 和 curRowHeadCheckboxId获取到cid对应的checkbox到左边的距离
            var rowIds = childrenRow.get(curRowHeadCheckboxId);//所有子行的行头的 checkboxId
            for (var i = 0; i < rowIds.length; ++i) {//这一列全部check
                var cur_cid = parseInt(rowIds[i]) + (cid - curRowHeadCheckboxId);
                checkboxIdMapState.put(cur_cid, checked);
            }
        }
        this.setState({});
    }
    render() {
        const appData = this.appData;
        const btnGroupColumns = this.btnGroupColumns;
        console.log(appData)
        let self = this;
        this.cid = 0;
        this.colNum = btnGroupColumns.length;//获得列宽
        const checkboxIdMapState = this.checkboxIdMapState;
        const parentRow = this.parentRow;
        const parentCol = this.parentCol
        if (btnGroupColumns) {
            this.addColName(btnGroupColumns, appData);//对应用的数据进行一个简单的处理

            btnGroupColumns.map((elem) => {
                elem.title = elem.name == 'kong' ? "" : <RoleCheckbox btnGroupId={elem.colname == 'name' ? null : elem.id} appId={null} cid={elem.cid} onChecked={self.onChecked} checked={checkboxIdMapState.get(elem.cid)} title={elem.name} /> ,
                    elem.key = elem.dataIndex = elem.colname;
                elem.render = function (text, record) {// text的值 == 对应表头列的Id == elem.id
                    var contents = text.split('_');
                    text = contents[0];
                    var cur_cid = contents[1];//当前列顶端 checkboxId
                    //判断是否是第一列
                    if (record.name.split('_')[0] != text) {//不是第一列
                        var leftCheckBoxId = record.name.split('_')[1];
                        parentRow.put(cur_cid, leftCheckBoxId);//该 checkboxId 对应的 (应用Id == leftCheckBoxId)

                        //加入每个checkbox  要传输的数据（appId, btnGroupId）
                        self.checkboxIdMapData.put(cur_cid, { appId: record.id, btnGroupId: elem.id })
                    }
                    //该 checkboxId 对应的 最上边的 checkboxId
                    parentCol.put(cur_cid, elem.cid);//该 checkboxId 对应的 (按钮Id == elem.cid)

                    //record.name.split('_')[0] 最原始的 name 的value
                    return <div className="colNumberOne">
                        {/* {record.name.split('_')[0] != text ? "" : <span>人员管理</span>} */}
                        <RoleCheckbox
                            btnGroupId={record.name.split('_')[0] == text ? null : elem.id}
                            appId={record.id}
                            cid={cur_cid}
                            onChecked={self.onChecked}
                            checked={checkboxIdMapState.get(cur_cid)}
                            title={text == elem.id ? null : text} />
                    </div>
                }
            });
        }
        return (
            <div>
                <Table
                    className="personType-table"
                    columns={btnGroupColumns}
                    dataSource={appData}
                    pagination={false}
                    bordered
                />
            </div>
        );
    }
}
export default RoleApplicationTable;
