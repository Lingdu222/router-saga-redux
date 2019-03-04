import React, { Component } from 'react'
import './style.css'
export default class Editor extends Component {
    render() {
        let { cansel, selecter, onOK } = this.props
        const selecter2 = selecter || {
            title: '',
            content: ''
        }
        let saveText = selecter2.id ? '保存' : '创建'
        // let save = () => {
        //     onOK({
        //         ...selecter,
        //         title: this.refs.title.value,
        //         content: this.refs.content.value
        //     })
        // }
        return (
            <div className='editor'>
                <input type="text" placeholder='请输入文章标题' defaultValue={selecter2.title} ref='title' />
                <textarea name="" id="" cols="30" rows="10" placeholder='请输入文章内容' defaultValue={selecter2.content} ref='content'></textarea>
                {/* 两种方法都行，只不过用一个函数包起来看着会比较的简化 */}
                {/* <button onClick={save}>{saveText}</button> */}
                <button onClick={() => onOK({
                    ...selecter,
                    title: this.refs.title.value,
                    content: this.refs.content.value
                })}>{saveText}</button>
                <button onClick={cansel}>取消</button>
            </div>
        )
    }
}
