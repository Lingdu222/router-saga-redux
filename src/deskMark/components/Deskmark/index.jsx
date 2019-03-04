import React, { Component } from 'react'

import List from '../List/index'
import CreateBar from '../CreateBar/index'
import ItemEditor from '../ItemEditor/index'
import ItemShowLayer from '../ItemShowLayer/index'
export default class Deskmark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            selected: null,
            selectedId: null,
            editing: false,
            haveSame: false,
            sameItem: null,
        }
    }
    // 创建文章
    createItem = () => {
        this.setState({
            editing: true,
            selected: null
        })
    }
    // 创建文章-->保存
    onOk = (items) => {
        const preItem = this.state.items
        const noSamesame = preItem.filter(item => item.id !== items.id)
        // 新建  // 编辑
        preItem.map(data => {
            if (data.id === items.id) {
                this.setState({
                    haveSame: true
                })
            }
        })
        console.log(noSamesame, '=====')
        const FFF = this.state.haveSame ? [...noSamesame, items] : [...preItem, items]
        this.setState({
            items: FFF,
            editing: false
        })
    }
    // 创建文章-->取消
    cancel = () => {
        this.setState({
            editing: false
        })
    }
    // 查看文章
    selectedclick = (id) => {
        const selectedId = this.state.selectedId
        if (id === selectedId) return
        this.setState({
            selectedId: id,
            editing: false,//11111
        })
    }
    // 点击编辑
    bianji = (id) => {
        this.setState({
            editing: true,
            selectedId: id
        })
    }
    delect = (id) => {
        if (!id) return
        // filter留校符合条件的
        const data = this.state.items.filter(item => item.id !== id)
        this.setState({
            items: data,
        })
    }
    render() {
        let { editing, selectedId, items } = this.state
        const selected2 = selectedId && items.find(item => item.id === selectedId);
        return (
            <div>
                <CreateBar onClick={this.createItem} />
                <List items={this.state.items} onClick={this.selectedclick} />
                {
                    editing
                        ? <ItemEditor
                            cancel={this.cancel}
                            onOk={this.onOk}
                            item={selected2}
                        />
                        : <ItemShowLayer
                            items={selected2}
                            ondelect={this.delect}
                            bianji={this.bianji}
                        />
                }
            </div>
        )
    }
}
