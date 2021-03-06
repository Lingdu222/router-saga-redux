import React, { Component } from 'react'
import uuid from 'uuid';
import './style.css'
export default class ItemEditor extends Component {
    state = {
        title: '',
        content: ''
    }
    inputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    textareaChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        let { title, content } = this.state
        const { item } = this.props
        return (
            <div className='createrItem'>
                <input
                    type="text"
                    placeholder='请输入文章标题'
                    // value={title}
                    onChange={this.inputChange}
                    defaultValue={item ? item.title : ''}
                />
                <textarea name="请写入文章内容" id="" cols="30" rows="10"
                    placeholder='请输入文章内容'
                    // value={content}
                    defaultValue={item ? item.content : ''}
                    onChange={this.textareaChange}
                ></textarea>
                <button onClick={() => {
                    this.props.onOk({
                        title: title,
                        content: content,
                        id: item ? item.id : uuid.v4(),
                        time: new Date().getTime()
                    })
                }}>{item ? '保存' : '创建'}</button>
                <button onClick={this.props.cancel}>取消</button>
            </div>
        )
    }
}

