import React from 'react';
import RoleCheckbox from './RoleCheckBox';
import { Table, message } from 'antd';
import Map from './Map';

class RoleApplicationTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseApp = this.chooseApp.bind(this);
        this.addColName = this.addColName.bind(this);
        this.addDataPid = this.addDataPid.bind(this);
        this.onChecked = this.onChecked.bind(this);
        this.addChildrenRow = this.addChildrenRow.bind(this);
        this.addData = this.addData.bind(this);
        this.isGroupRow = this.isGroupRow.bind(this);
        this.checkGroupAndColumnState = this.checkGroupAndColumnState.bind(this);//确保 组全选 和 列 全选

        this.cid = 0;
        this.rowNum = 0;
        this.colNum = 0;

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
        this.appData = [{ name: '报表', id: "456", key: '5', children: [{ name: '合同价款', id: "45xx61", key: '6', }, { name: '合同台账', id: "45xf61", key: '7', }], }, { name: '图标', id: "789", key: '1', children: [{ name: '小图标', id: "45xx60", key: '4' }, { name: '大图标', id: "4xx560", key: '8' }] }];
        this.btnGroupColumns = [{ id: '12xx3', name: '小部件', colname: 'name' }, { id: '43xx5', name: '显示' }, { id: '43xfffx5', name: 'test' }];
    }

    componentWillReceiveProps(nextProps) {
        const { roleData } = nextProps;
        if (roleData.msg) {
            if (roleData.msg.indexOf('成功') >= 0)
                message.success(roleData.msg, 5);
            else if (roleData.msg.indexOf('失败') >= 0)
                message.error(roleData.msg, 5);
            else
                message.info(roleData.msg, 5);
        }
    }

    chooseApp() {
        this.props.chooseApp();
    }
    ////////////////////////////////////////////////////////////////////////////////

    addChildrenRow(appData) {//添加所有子行 标识
        if (!appData) return;
        for (var i = 0; i < appData.length; ++i) {//获取行头的checkboxId
            this.rowNum++;//获取行号
            var curRowHeadCheckboxId = appData[i].name.split('_')[1];
            var childrenRow = this.childrenRow;
            if (!childrenRow.get(curRowHeadCheckboxId)) childrenRow.put(curRowHeadCheckboxId, []);
            this.addChildrenRow(appData[i].children);
            childrenRow.get(curRowHeadCheckboxId).push(curRowHeadCheckboxId);//加入当前行
            if (appData[i].children) {//加入子行
                for (var j = 0; j < appData[i].children.length; ++j) {
                    var childCurRowHeadCheckboxId = appData[i].children[j].name.split('_')[1];
                    var descendants = childrenRow.get(childCurRowHeadCheckboxId);//孙子们节点
                    for (var k = 0; k < descendants.length; ++k) {
                        childrenRow.get(curRowHeadCheckboxId).push(descendants[k]);
                    }
                }
            }
        }
    }

    addDataPid(btnGroupColumns, appData) {//生成新的列， 并且为非表头的每一个单元格设置固定 id，（防止表格渲染时 id发生变化）
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

    addColName(btnGroupColumns, appData) {
        if (btnGroupColumns) {
            btnGroupColumns.map((elem, index) => {
                if (!elem.colname) {
                    elem.colname = elem.id;
                }
                elem.cid = ++this.cid;
            });
        }

        if (appData) {
            this.addDataPid(btnGroupColumns, appData);
            /////清空数据
            var keySet = this.childrenRow.keySet();
            for (var key in keySet) {
                if (this.childrenRow.get(keySet[key]) && this.childrenRow.get(keySet[key]).length)
                    this.childrenRow.get(keySet[key]).length = 0;
            }
            /////总行数
            this.rowNum = 0;
            this.addChildrenRow(appData);
            ++this.rowNum;
            /////判断应用对应的checkbox是否选中，列头对应的checkbox是否选中
            this.checkGroupAndColumnState();
        }
    }

    addData(cid, checked) {
        var curCheckboxData = this.checkboxIdMapData.get(cid);
        if (curCheckboxData) {
            var curQueueData = {
                roleId: this.props.roleId,
                btnGroupId: curCheckboxData.btnGroupId,
                appId: curCheckboxData.appId,
            };
            this.dataQueue.push(curQueueData);
        }
    }

    isGroupRow(cid) {//判断是否为分组
        //第一行当做分组
        if (parseInt((cid - 1) / this.colNum) * this.colNum + 1 == 1) return true;

        const parentRow = this.parentRow;
        const childrenRow = this.childrenRow;
        var curRowHeadCheckboxId = parentRow.get(cid) ? parentRow.get(cid) : parseInt((cid - 1) / this.colNum) * this.colNum + 1;//通过cid 和 curRowHeadCheckboxId获取到cid对应的checkbox到左边的距离
        var rowIds = childrenRow.get(curRowHeadCheckboxId);//所有子行的行头的 checkboxId
        return rowIds.length > 1 ? true : false;
    }

    checkGroupAndColumnState() {
        const childrenRow = this.childrenRow;
        const checkboxIdMapState = this.checkboxIdMapState;
        const colNum = this.colNum;
        const rowNum = this.rowNum;

        const rowState = [];

        for (var i = 0; i <= rowNum; ++i)
            rowState.push(true)//默认所有的行全选
        rowState[1] = false;

        for (var row = 2; row <= rowNum; ++row) {
            var cb = (row - 1) * colNum + 2;//这一行从第2个 checkbox 开始
            if (this.isGroupRow(cb)) {//分组行，不算入
                rowState[row] = false;
                continue;
            }
            var ce = row * colNum;
            var curRowState = true;//默认这一行全选
            for (var cid = cb; cid <= ce; ++cid) {//遍历这一行
                if (checkboxIdMapState.get(cid) == false) {
                    curRowState = false;
                    break;
                }
            }
            rowState[row] = curRowState;
            if (rowState[row] == true) {//应用对应的checkbox选中
                checkboxIdMapState.put((row - 1) * colNum + 1, true);
            } else {
                checkboxIdMapState.put((row - 1) * colNum + 1, false);
            }
        }

        //判断分组是否选中
        for (var row = 2; row <= rowNum; ++row) {
            const cid = (row - 1) * colNum + 1;//每一行的第一个
            if (!this.isGroupRow(cid)) continue;
            //计算分组行
            var cids = childrenRow.get(cid);
            var groupState = true;//默认这个分组被选中
            for (var i = 0; i < cids.length; ++i) {
                if (cids[i] != cid) {//不是分组行
                    var cur_row = (cids[i] - 1) / this.colNum + 1;
                    if (rowState[cur_row] == false) {
                        groupState = false;
                        break;
                    }
                }
            }
            for (var cur_cid = cid; cur_cid <= row * colNum; ++cur_cid) {//当前分组行的 checkbox 状态
                checkboxIdMapState.put(cur_cid, groupState);
            }
            if (groupState == false) {//如果当前分组行没有状态改变，查看这一行的某一个分组列是否有变化
                const childRowNum = cids.length - 1;
                for (var curRowCid = cid; curRowCid < cid + this.colNum; ++curRowCid) {//遍历这一分组行的checkboxId
                    var curColState = true;
                    for (var childRowCid = curRowCid + this.colNum, cnt = 0; cnt < childRowNum; childRowCid += this.colNum, ++cnt) {
                        if (checkboxIdMapState.get(childRowCid) == false) {
                            curColState = false;
                            break;
                        }
                    }
                    checkboxIdMapState.put(curRowCid, curColState);
                }
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

    onChecked(cid, btnGroupId, appId, checked) {//checkboxId, 按钮id，应用id
        const checkboxIdMapState = this.checkboxIdMapState;
        const parentRow = this.parentRow;
        const parentCol = this.parentCol;
        const childrenRow = this.childrenRow;
        const colNum = this.colNum;
        const rowNum = this.rowNum;
        //清空数据队列
        this.dataQueue.length = 0;
        //标识当前的操作
        this.checked = checked;

        if (btnGroupId == null && appId == null) {
            for (var cur_cid = 1; cur_cid <= colNum * rowNum; ++cur_cid) {
                checkboxIdMapState.put(cur_cid, checked);
                if (!this.isGroupRow(cur_cid))
                    this.addData(cur_cid, checked);
            }
        } else if (btnGroupId == null) {//appId 不为null, 这一行全选
            var rowHeadCheckboxIds = childrenRow.get(cid);//所有子行的行头的 checkboxId
            for (var i = 0; i < rowHeadCheckboxIds.length; ++i) {
                var cur_cid = rowHeadCheckboxIds[i];
                var cur_row_max_cid = parseInt(cur_cid) + colNum;
                while (cur_cid < cur_row_max_cid) {
                    checkboxIdMapState.put(cur_cid, checked);
                    if (!this.isGroupRow(cur_cid))
                        this.addData(cur_cid, checked);
                    ++cur_cid;
                }
            }
        } else if (appId == null) {//btnId不为null，这一列全部check
            var cur_cid = cid;
            while (cur_cid <= rowNum * colNum) {
                checkboxIdMapState.put(cur_cid, checked);
                if (!this.isGroupRow(cur_cid))
                    this.addData(cur_cid, checked);
                cur_cid += colNum;
            }
        } else {//都不为null
            var curRowHeadCheckboxId = parentRow.get(cid);//通过cid 和 curRowHeadCheckboxId获取到cid对应的checkbox到左边的距离
            var rowIds = childrenRow.get(curRowHeadCheckboxId);//所有子行的行头的 checkboxId
            for (var i = 0; i < rowIds.length; ++i) {//这一列全部check
                var cur_cid = parseInt(rowIds[i]) + (cid - curRowHeadCheckboxId);
                checkboxIdMapState.put(cur_cid, checked);
                if (!this.isGroupRow(cur_cid))
                    this.addData(cur_cid, checked);
            }

        }
        this.setState({});
    }

    ////////////////////////////////////////////////////////////////////////////////

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

            btnGroupColumns.map((elem, index) => {
                //elem.colname=='name' ? null : elem.id, 默认左上角的id 没有 appId 和 btnGroupId
                elem.title = <RoleCheckbox btnGroupId={elem.colname == 'name' ? null : elem.id} appId={null} cid={elem.cid} onChecked={self.onChecked} checked={checkboxIdMapState.get(elem.cid)} title={elem.name} /> ,
                    elem.key = elem.dataIndex = elem.colname;
                elem.render = function (text, record, index) {// text的值 == 对应表头列的Id == elem.id
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
                    return <RoleCheckbox btnGroupId={record.name.split('_')[0] == text ? null : elem.id} appId={record.id} cid={cur_cid} onChecked={self.onChecked} checked={checkboxIdMapState.get(cur_cid)} title={text == elem.id ? null : text} />
                }
            });
        }

        return (
            <div>
                {/* <Btn iconName="icon-add" onClick={this.chooseApp} btnClass="add-btn" btnName="选择应用" /> */}
                <Table
                    indentSize={15}
                    className="personType-table"
                    columns={btnGroupColumns}
                    dataSource={appData}
                    pagination={false}
                />
            </div>
        );
    }
}
export default RoleApplicationTable