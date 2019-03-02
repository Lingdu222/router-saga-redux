import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Input from './components/Input'

class App extends Component {
    render() {
        return (
            <div className="todo">
                <Header />
                <Input />
                <List />
            </div>
        )
    }
}

export default App
