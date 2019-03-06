import React, { Component } from 'react'
import List from '../List';
import Creater from '../creater';
import Show from '../ItemShow';
import Editor from '../ItemEditor';
import uuid from 'uuid'
export default class DeskMark2 extends Component {
    state = {
        data: [],
        editor: false,
        selectId: null
    }
    // 创建文章
    creater = () => {
        this.setState({
            editor: true
        })
    }
    // 取消
    cansel = () => {
        this.setState({
            editor: false
        })
    }
    // 查看详情
    see = (id) => {
        const { selectId } = this.state
        if (id === selectId) return
        this.setState({
            selectId: id,
            editor: false
        })
    }
    // 删除
    delect = (id) => {
        const data = this.state.data.filter(item => item.id !== id)
        this.setState({
            data,
            selectId: null
        })
    }
    // 编辑
    editor = (id) => {
        this.setState({
            selectId: id,
            editor: true
        })
    }
    // 保存 创建
    onOK = (item) => {
        let data = this.state.data
        if (!item.id) {
            data = [...data, {
                ...item,
                id: uuid.v4(),
                time: new Date().getTime(),
            }]
        } else {
            data = data.map(i => (
                i.id === item.id ? { ...i, ...item } : i
            ))
            console.log(data, '##########')
        }
        this.setState({
            data,
            selectId: item.id,
            editor: false
        })
    }
    render() {
        let { data, editor, selectId } = this.state
        const selecter = selectId && data.find(item => item.id === selectId)
        return (
            <div>
                <Creater show={this.creater} />
                <List data={data} onshow={this.see} />
                {
                    editor
                        ? <Editor cansel={this.cansel} selecter={selecter} onOK={this.onOK} />
                        : <Show data={selecter} ondelect={this.delect} onEditor={this.editor} />
                }
            </div>
        )
    }
}
