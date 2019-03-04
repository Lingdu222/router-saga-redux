import React, { Component } from 'react'

import List from '../List/index'
import CreateBar from '../CreateBar/index'
import ItemEditor from '../ItemEditor/index'
import ItemShowLayer from '../ItemShowLayer/index'
import { channel } from 'redux-saga';
import thunk from 'redux-thunk';
export default class Deskmark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                // {
                //     'id': 1,
                //     'title': 'hello',
                //     'content': 'hello world',
                //     'time': 1458 - 30208359
                // },
                // {
                //     'id': 2,
                //     'title': 'hello2',
                //     'content': 'hello world2',
                //     'time': 1458 - 30208359
                // }
            ],
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
        const same = preItem.filter(item => item.id !== items.id)
        const noSame = preItem.filter(item => item.id === items.id)
        // 新建  // 编辑
        const preItem2 = preItem.map(data => {
            if (data.id === items.id) {
                this.setState({
                    haveSame: true
                })
            }
            return [...same, {
                id: noSame.id,
                title: items.title,
                content: items.comtent
            }]
        })


        // const sameItem = preItem.filter(item =>
        //     item.id === items.id
        // )
        // console.log(sameItem,'相同的元素')

        // let A = preItem.map(item => {
        //     let same = {}
        //     if (item.id == items.id) {
        //         ishave = true
        //         same = item
        //         same = {
        //             id: items.id,
        //             title: items.title,
        //             content: items.content,
        //             time: new Date().getTime()
        //         }
        //     }

        //     return [...same2item, same]
        // })
        // console.log(A)
        // console.log(preItem)
        const FFF = this.state.haveSame ? [...preItem2] : [...preItem, items]
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
    bianji = (id) => {
        this.setState({
            editing: true,
            selectedId: id
        })
    }
    delect = (id) => {
        // filter留校符合条件的
        const data = this.state.items.filter(item => item.id !== id)
        this.setState({
            items: data,
            selected: null
        })
    }
    render() {
        let { editing, selected } = this.state
        return (
            <div>
                <CreateBar onClick={this.createItem} />
                <List items={this.state.items} onClick={this.selectedclick} />
                {
                    editing
                        ? <ItemEditor
                            cancel={this.cancel}
                            onOk={this.onOk}
                            item={selected}
                        />
                        : <ItemShowLayer
                            items={selected}
                            ondelect={this.delect}
                            bianji={this.bianji}
                        />
                }
            </div>
        )
    }
}
