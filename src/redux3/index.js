import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from './action'
@connect(
    state => ({ number: state.number }),
    { ...actions }

)
class Reduxer extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.minus}> - </button>
                <button onClick={this.props.plus}> + </button>

            </div>
        )
    }
}
export default Reduxer
