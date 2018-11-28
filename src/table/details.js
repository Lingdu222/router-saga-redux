import React, { Component } from 'react'

export class Details extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div>我是详情页面<h1>{match.params.id}</h1></div>
            </div>
        )
    }
}

export default Details
