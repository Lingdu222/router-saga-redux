import React, { Component } from 'react'

export class Test extends Component {
    state = {
        count: 0
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        }, 0)
    }
    componentWillMount = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        }, 0)
    }
    onClick = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        }, 0)
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

