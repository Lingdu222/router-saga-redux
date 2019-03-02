import React, { Component } from 'react'
import { connect } from 'react-redux'

import Counter from './counter'
import store from './store'

@connect(
    state => ({ value: state }),
    dispatch => ({
        onIncrement: () => { dispatch({ type: 'ADD' }) },
        onDecrement: () => { dispatch({ type: 'REDUCE' }) },
        onIncrementAsync: () => { dispatch({ type: 'ADD_ASYNC' }) },
    })
)
export class App extends Component {
    render() {
        const { value, onIncrement, onDecrement, onIncrementAsync } = this.props
        return (
            <Counter
                value={value}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onIncrementAsync={onIncrementAsync}
            />
        )
    }
}

export default App
