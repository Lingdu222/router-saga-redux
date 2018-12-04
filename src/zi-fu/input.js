import React, { Component } from 'react'

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
    }
    handel = (e) => {
        this.props.change(e.target.value)
    }

    render() {
        return (
            <p>
                <label htmlFor="tempInput">请输入天气温度：</label>
                {/* onChange 事件调用函数*/}
                <input
                    className="Tem-input"
                    type="text"
                    name="tempInput"
                    value={this.props.temperature}
                    onChange={this.handel}
                />
            </p>
        );
    }
}

export default TemperatureInput
