import React, { Component } from 'react'
// Promise，立即执行，（相当于一个立即执行函数，快于同步）
// 
export class Test extends Component {
    state = {
        count: 0
    }
    componentWillMount = () => {
        setTimeout(() => {
            console.log('开始执行计数器')
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        }, 0)
        new Promise((resolve) => {
            console.log('开始执行promise')
            setTimeout(() => {
                console.log('请求成功')
                resolve(true) // 执行这个表示下面的也要执行，如果不调用这个，那个.then()就不执行了，里面的参数无所谓，是true和false是一样的
            }, 0)

        }).then(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        })
    }
    render() {
        console.log(this.state.count)
        return (
            <div>
                <button onClick={this.onClick}></button>
            </div>
        )
    }
}

export default Test

