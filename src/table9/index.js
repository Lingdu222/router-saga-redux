import React, { Component } from 'react'
import { Button, Input, Table, Row, Col, Tag, Checkbox } from 'antd'
import './index.css'
export default class AddRole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [],  // Check here to configure the default column
            loading: false,
        }
    }
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        this.setState({
            selectedRowKeys: [],
            loading: false,
        });
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    checkTeacher = (text, record) => {
        console.log(text, record, '2345678998')

    }
    see = (e) => {
        console.log(e, 'jvdav')
    }

    render() {
        const borderStyle = { border: 'none', boxShadow: 'none' }
        const CheckableTag = Tag.CheckableTag;
        const columns = [
            {
                // title: '人员管理',
                dataIndex: 'manage',
                // colSpan: 2,
                align: 'center',
                // 直接显示第一列数据
                render: (value, row, index) => {
                    // const obj = {
                    //   children: value,
                    //   props: {},
                    // };
                    // if (index === 0) {
                    //   obj.props.rowSpan = 2;
                    // }
                    // return obj;
                }
            }, {
                title: <Checkbox style={{ marginLeft: '28px' }} onChange={this.see}>查看</Checkbox>,
                dataIndex: 'see',
                align: 'center',

            }, {
                title: <Checkbox>下载</Checkbox>,
                className: 'down',
                dataIndex: 'down',
                align: 'center',

            }, {
                title: <Checkbox>修改</Checkbox>,
                dataIndex: 'edit',
                align: 'center'
            }, {
                title: <Checkbox>删除</Checkbox>,
                dataIndex: 'delete',
                align: 'center',
            }, {
                title: <Checkbox>新增</Checkbox>,
                dataIndex: 'add',
                align: 'center'
            }];


        const data = [{
            see: <Checkbox onClick={this.checkTeacher}>教师管理</Checkbox>,
            down: <CheckableTag >X</CheckableTag>,
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox>学生管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox>题库管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox>视频管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox style={{ marginLeft: '28px' }}>老师布置管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox style={{ marginLeft: '28px' }}>学生作业管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox style={{ marginLeft: '28px' }}>题库作业报告</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }, {
            see: <Checkbox style={{ marginLeft: '28px' }}>学习成绩管理</Checkbox>,
            down: 'X',
            edit: 'X',
            delete: 'X',
            add: 'X',
        }];
        return (
            <div className='addRole'>
                <div className='addRole-title'>
                    <Input placeholder='请输入角色名称...' className='addRole-inp' style={borderStyle} />
                    <Button icon='delete' className='addRole-btn'>删除角色</Button>
                </div>
                <div className='addRole-table'>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={false}
                    />
                    <Row type="flex" justify="end" >
                        <Col span={4}>
                            <Button type="primary" className='addRole_cancel'>取消</Button>
                        </Col>
                        <Col span={3}  >
                            <Button type="primary" className='addRole_comfirm' >确认添加</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

