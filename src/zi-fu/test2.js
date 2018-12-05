import React, { Component } from 'react'
/**
 * 正常this.setState是异步的，但是在同一个钩子函数中的this.setState，前面覆盖后边（其实是在同一个钩子函数中，
 * this.state.count都是从前一状态中同时分发过来的，运行结果就会被后面的覆盖前面的，造成前一个没有执行的假象）
 */
export class Test extends Component {
    state = {
        count: 0
    }
    componentDidMount = () => {

        this.setState({
            count: this.state.count + 999
        })
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillMount = () => {

        this.setState({
            count: this.state.count + 999
        }, () => {
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count + 8
        }, () => {
            console.log(this.state.count)
        })
        // this.setState((state) => (console.log(this.state.count)))
    }
    onClick = () => {
        this.setState({
            count: this.state.count + 2
        })
        this.setState({
            count: this.state.count + 1
        })

    }
    render() {
        console.log(this.state.count)
        return (
            <div>
                <button onClick={this.onClick}>点击</button>
            </div>
        )
    }
}

export default Test

