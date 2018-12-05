import React, { Component } from 'react'
import TemperatureShow from './show'
import TemperatureInput from './input'
class TemperatureContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0
        }

    }
    handelchange = (temperature) => {
        this.setState({ temperature })
    }

    render() {
        const { temperature } = this.state
        return (
            <div>
                <TemperatureInput change={this.handelchange} temperature={temperature} />
                <TemperatureShow temperature={parseFloat(temperature)} />
            </div>
        )
    }
}

export default TemperatureContainer
