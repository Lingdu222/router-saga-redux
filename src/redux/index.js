import React, { Component } from 'react'
import Counter from "./counter"
import store from "./store"
export class App extends Component {
    render() {
        return (
            <Counter
                count={store.getState()}
                /* 这里面 一定要用箭头函数，当初就是因为这个让我找了好长时间的bug,还没有找到 */
                add={() => store.dispatch({ type: 'ADD' })}
                reduce={() => store.dispatch({ type: 'REDUCE' })}
            />
        )
    }
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
}

export default App
