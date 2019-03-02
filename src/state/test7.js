import React, { Component } from 'react';

export default class Test extends Component {
    state = {
        count: 0
    };

    componentWillMount() {
        this.setState({
            count: this.state.count + 1
        });
        this.setState({
            count: this.state.count + 1
        });
        this.setState((state) => ({
            count: state.count + 1
        }));
        this.setState((state) => ({
            count: state.count + 1
        }));
    }

    onClick = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            });
            this.setState((state) => ({
                count: state.count + 1
            }));
            this.setState((state) => ({
                count: state.count + 1
            }));
        }, 0)
    }

    render() {
        console.log('rendered', `count = ${this.state.count}`);

        return (
            <div>
                <h2>setState - 函数式</h2>
                <p>Count：{this.state.count}</p>
                <button
                    onClick={this.onClick}
                >Click me</button>
            </div>
        )
    }
}
