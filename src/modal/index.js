import React from 'react'
import './index.css'

class Modals extends React.Component {
    state = { visible: false }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            this.state.visible ?
                <div className='modals'>
                    <header> {this.props.title}</header>
                    <p className='btn'>
                        <span className='btn-cancel' onClick={this.handleCancel}>取消</span>
                        <span className='btn-ok' onClick={this.handleOk}>确定</span>
                    </p>
                </div>
                : null
        );
    }
}
export default Modals