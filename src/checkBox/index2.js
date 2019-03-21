import React, { Component } from 'react'
import { Table } from 'antd';
import { Checkbox } from './components'
import './index.css'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render() {
            return <Checkbox />
        }

    },
    {
        title: 'age',
        dataIndex: 'age',
        render() {
            return <Checkbox />
        }

    },
    {
        title: 'Address',
        dataIndex: 'Address',
        render() {
            return <Checkbox />
        }

    }

];

const data = [{
    key: '1',
    name: 'John Brown',
    age: '19',
    address: 'xjxj'
}, {
    key: '2',
    name: 'Jim Green',
    age: '19',
    address: 'xjxj'

}, {
    key: '3',
    name: 'Joe Black',
    age: '19',
    address: 'xjxj'

}, {
    key: '4',
    name: 'Disabled User',
    age: '19',
    address: 'xjxj'

}];

export default class Check2 extends Component {
    render() {
        return (
            <div className="table">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
        )
    }
}
