import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        const { count, add, reduce } = this.props
        return (
            <div>
                <button onClick={add}>1s之后被增加</button>
                <div>被点击了 {count}次</div>
                <button onClick={reduce}>1s之后被减去</button>
            </div>
        )
    }
}

export default Counter
