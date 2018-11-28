import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Counter extends Component {
    static propType = {
        count: PropTypes.number,
        add: PropTypes.func,
        reduce: PropTypes.func
    }
    render() {
        const { count, add, reduce } = this.props
        return (
            <div>
                <span>我一共被点击{count}次</span>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
            </div>
        )
    }
}

export default Counter
