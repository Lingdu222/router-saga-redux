
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './counter'
import { add, reduce } from './actionCreator'

@connect(
    state => ({ count: state }), { add, reduce }
)
export class App extends Component {
    render() {
        const { count, add, reduce } = this.props
        return (
            <Counter
                count={count}
                add={add}
                reduce={reduce}
            />
        )
    }
}
export default App
