import React, { Component } from 'react';

export default class Test extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.button.addEventListener(
            'click',
            () => this.onClick('原生事件'),
            false
        );
    }

    onClick = (info) => {
        console.log(info);
        this.setState({
            count: this.state.count + 1
        });
        this.setState({
            count: this.state.count + 2
        });
    }

    render() {
        console.log('rendered', `count = ${this.state.count}`);

        return (
            <div>
                <h2>setState - 原生事件vsReact事件</h2>
                <p>Count：{this.state.count}</p>
                <button
                    onClick={() => this.onClick('React事件')}
                    ref={input => this.button = input}
                >Click me</button>
            </div>
        )
    }
}