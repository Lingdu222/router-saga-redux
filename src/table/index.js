import React, { Component } from 'react'
import { Table, Divider, Tag, Popconfirm, message, Icon } from 'antd';
import './index.css'

export class Wrap extends Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: '作业类型',
                dataIndex: 'name',
                key: 'name',
                // render: text => <a href="javascript:;">{text}</a>,
            }, {
                title: '作业名称',
                dataIndex: 'age',
                key: 'age',
                render: (text, index) => <a href=" javascript:;" onClick={() => { this.goDetail(index.key) }}> {text}</a >,
            }, {
                title: '发送日期',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: '截止日期',
                key: 'tags',
                dataIndex: 'tags',
                // render: tags => (
                //     <span>
                //         {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                //     </span>
                // ),
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Popconfirm title="确定要删除?" okText="确定" cancelText="取消" onConfirm={() => this.handleDelete(record.key)}>
                        <Icon type="close-circle" className='deleteBtn' />
                    </Popconfirm>
                ),
            }];
        this.state = {
            dataSource: [
                {
                    key: '1',
                    name: '题库',
                    age: 'New York No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                    width: 100
                }, {
                    key: '2',
                    name: '报告',
                    age: 'London No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                }, {
                    key: '3',
                    name: '演讲',
                    age: 'Sidney No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                }, {
                    key: '4',
                    name: '题库',
                    age: 'New York No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                }, {
                    key: '5',
                    name: '报告',
                    age: 'London No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                }, {
                    key: '6',
                    name: '演讲',
                    age: 'Sidney No. 1 Lake Park',
                    address: '2018年11月11号',
                    tags: '2018年11月12号',
                }
            ]

        }
    }
    goDetail = (id) => {
        const { history, location } = this.props
        //link方法
        // < Link to = "/user/sam" > 用户</Link>
        //push方法
        history.push(`/detail/${id}`)// 可以做跳转用
    }
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) }, () => {
            message.success("删除成功")
        });
    }
    render() {
        const { dataSource } = this.state;
        const { match } = this.props
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                }),
            };
        });
        return (
            <div className='table-wrap'>
                <h2>已布置作业</h2>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false} //不显示分页信息
                    bordered//边框线
                    // pagination={{ pageSize: 3 }}//每一页显示几个数据
                    scroll={{ y: 240 }}
                />
            </div>
        )
    }
}

export default Wrap