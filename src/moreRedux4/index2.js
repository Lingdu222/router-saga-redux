import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './action'
@connect(
    state => ({ count: state.reducer2.count }), { ...actions }
)
export default class Cons extends Component {
    render() {
        // console.log(this.props.count)
        const { count, add2, jian } = this.props
        return (
            <div>
                我是从redux中调过来的数据{count}
                <button onClick={add2} >+</button>
                <button onClick={jian}>-</button>
            </div>
        )
    }
}
