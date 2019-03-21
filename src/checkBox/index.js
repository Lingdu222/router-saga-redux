import React, { Component } from 'react'

import { Checkbox, Table, Modal } from 'antd';
// import Dialog from './components'
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple'];



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: record => ({
    //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //     name: record.name,
    // }),
};



const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    delect: '删除',
    add: '新增',

}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    delect: '删除',
    add: '新增',
}];

const columns = [{
    title: `<Checkbox />jjj`,
    dataIndex: 'name',
    key: 'name',
    render(text) {
        return <div>
            <Checkbox />
            <span>{text}</span>
        </div>
    }
}, {
    title: '下载',
    dataIndex: 'age',
    key: 'age',
    render(text) {
        return <div>
            <Checkbox />
            <span>{text}</span>
        </div>
    }
}, {
    title: '修改',
    dataIndex: 'address',
    key: 'address',
    render(text) {
        return <div>
            <Checkbox />
            <span>{text}</span>
        </div>
    }
}, {
    title: '删除',
    dataIndex: 'delect',
    key: 'delect',
    render(text) {
        return <div>
            <Checkbox />
            <span>{text}</span>
        </div>
    }
}, {
    title: '新增',
    dataIndex: 'add',
    key: 'add',
    render(text) {
        return <div>
            <Checkbox />
            <span>{text}</span>
        </div>
    }
}
];


const defaultCheckedList = ['Apple', 'Orange'];

export default class Check extends Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };

    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
    warning = () => {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    }

    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                </div>
                {/* <Table
                    // rowSelection={rowSelection} 
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                /> */}
                {/* <Dialog /> */}
                {/* <button onClick={this.warning()}>Warning</button>s */}
                {/* <Modal
                    title="Basic Modal"
                    visible={true}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                </Modal> */}

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="success">
                            <th>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    查看
                    </Checkbox>
                            </th>
                            <th>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    新增
                    </Checkbox></th>
                            <th>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    删除
                    </Checkbox></th>
                            <th>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    编辑
                    </Checkbox></th>
                            <th>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    下载
                    </Checkbox></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            /></td>
                            <td><CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            /></td>
                            <td><CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            /></td>
                            <td><CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            /></td>
                            <td><CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
