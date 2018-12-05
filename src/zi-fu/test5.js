import React, { Component } from 'react'

export class Test extends Component {
    state = {
        count: 0
    }
    componentWillMount() {
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        //函数方式：总是取到当时最新的state
        this.setState((state) => ({
            count: state.count + 1
        }))
        this.setState((state) => ({
            count: state.count + 1
        }))
    }

    onClick = () => {

        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState((state) => ({
                count: state.count + 1
            }))
            this.setState((state) => ({
                count: state.count + 1
            }))
        }, 0)
    }

    render() {
        console.log(this.state.count)
        return (
            <div>
                <button
                    onClick={this.onClick}
                // ref={input => this.button = input}
                ></button>
            </div>
        )
    }
}

export default Test

