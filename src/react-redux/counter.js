import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        const { count, add, reduce, reduce2 } = this.props
        return (
            <div>
                <span>我一共被点击{count}</span>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
                <button onClick={reduce2}>延迟减去</button>
            </div>
        )
    }
}

export default Counter
