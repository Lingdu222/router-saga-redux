import React, { Component } from 'react'

export class Text extends Component {
    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default Text
