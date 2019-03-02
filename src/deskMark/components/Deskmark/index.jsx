import React, { Component } from 'react'

import List from '../List/index'
import CreateBar from '../CreateBar/index'
import ItemEditor from '../ItemEditor/index'
import ItemShowLayer from '../ItemShowLayer/index'
export default class Deskmark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    'id': 1,
                    'title': 'hello',
                    'content': 'hello world',
                    'time': 1458 - 30208359
                },
                {
                    'id': 2,
                    'title': 'hello2',
                    'content': 'hello world2',
                    'time': 1458 - 30208359
                }
            ],
            selected: null,
            selectedId: null,
            editing: false,
        }
    }
    createItem = () => {
        this.setState({
            editing: true
        })
    }
    // 创建文章
    onOk = (items) => {
        const preItem = this.state.items
        this.setState({
            items: [...preItem, items],
            editing: false
        })
    }
    // 取消创建
    cancel = () => {
        this.setState({
            editing: false
        })
    }

    // 查看文章
    selectedclick = (id) => {
        const data = this.state.items
        const selectedId = this.state.selectedId
        if (id === selectedId) return
        this.setState({
            selectedId: id
        }, () => {
            data.map(item => {
                if (item.id === this.state.selectedId) {
                    this.setState({
                        selected: item
                    })
                }
                return null
            })
        })

    }

    // 点击编辑

    bianji = () => {
        // const data=this.state.items.filter(item=>item.id===this.state.selected.id)
        this.setState({
            editing: true
        })

    }
    // 点击取消
    // 点击删除
    delect = (id) => {
        // filter留校符合条件的
        const data = this.state.items.filter(item => item.id !== id)
        this.setState({
            items: data,
            selected: null
        })
    }
    // 点击保存



    render() {
        let { editing, selected } = this.state
        return (
            <div>
                <CreateBar onClick={this.createItem} />
                <List items={this.state.items} onClick={this.selectedclick} />
                {
                    editing && <ItemEditor cancel={this.cancel} onOk={this.onOk} />
                }
                {
                    editing === false && selected && <ItemShowLayer items={selected} ondelect={this.delect} bianji={this.biaji} />
                }
            </div>
        )
    }
}
