import React, { Component } from 'react'

import List from '../List/index'
import CreateBar from '../CreateBar/index'
import ItemEditor from '../ItemEditor/index'
export default class Deskmark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    'id': 1,
                    'title': 'hello',
                    'content': 'hello world',
                    'time': 1458 - 30208359
                },
                {
                    'id': 2,
                    'title': 'hello2',
                    'content': 'hello world2',
                    'time': 1458 - 30208359
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <CreateBar />
                <List items={this.state.items} />
                {/* <ItemEditor /> */}
            </div>
        )
    }
}
