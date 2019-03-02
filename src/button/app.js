import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    handelClick = () => {
        this.setState((state) => ({
            open: !this.state.open
        }))
    }
    render() {
        const { open } = this.state
        return (
            <div>
                {!open && <button onClick={this.handelClick}>布置作业</button>}
                {open && <button onClick={() => { alert("success") }}>确定布置</button>}
                {open && < button onClick={this.handelClick}> 思索再三</button>}
            </div>
        )
    }
}

export default App
