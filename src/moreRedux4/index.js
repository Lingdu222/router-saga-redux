import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './action'
import Com from './index2'
@connect(
    state => ({ number: state.reducer.number }), { ...actions }
)
export default class CCCC extends Component {

    render() {
        const { number, reduce, add } = this.props
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={reduce}>-</button>
                <button onClick={add}>+</button>
                <Com />
            </div>
        )
    }
}
