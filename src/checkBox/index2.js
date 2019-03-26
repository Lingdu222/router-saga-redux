import React, { Component } from 'react'
import { Table } from 'antd';
import { Checkbox } from './components'
import './index.css'

const columns = [
    {
        title: '',
        dataIndex: 'name',
        align: 'center',
        render(text) {
            return <Checkbox>{text}</Checkbox>
        }
    },
    {
        title: < Checkbox > 查看</Checkbox >,
        dataIndex: 'name2',
        aline: 'center',
        render() {
            return <Checkbox />
        }
    },
    {
        title: < Checkbox > 下载</Checkbox >,
        dataIndex: 'age',
        aline: 'center',
        render() {
            return <Checkbox />
        }
    },
    {
        title: < Checkbox > 修改</Checkbox >,
        dataIndex: 'Address',
        aline: 'center',
        render() {
            return <Checkbox />
        }
    },
    {
        title: < Checkbox > 删除</Checkbox >,
        dataIndex: 'Address2',
        aline: 'center',
        render() {
            return <Checkbox />
        }
    },
    {
        title: < Checkbox > 新增</Checkbox >,
        dataIndex: 'Address3',
        aline: 'center',
        render() {
            return <Checkbox />
        }
    }
];

const data = [
    {
        key: '1',
        id: '1',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'
    }, {
        key: '2',
        id: '2',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'
    }, {
        key: '3',
        id: '3',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'

    }, {
        key: '4',
        id: '4',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'
    }, {
        key: '5',
        id: '5',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'

    }, {
        key: '6',
        id: '6',
        name: '教师管理',
        name2: '教师管理',
        age: '19',
        address: 'xjxj',
        address2: 'xjxj',
        address3: 'xjxj'
    }];

export default class Check2 extends Component {
    render() {
        return (
            <div className="table">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                />
            </div>
        )
    }
}
