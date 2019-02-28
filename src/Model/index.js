import React from 'react'
import { Modal, Button } from 'antd';
import './index.css'
class App3 extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
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
        const bodystyle = {
            padding: 0
        }
        return (
            <div >
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="hello jbone"
                    bodyStyle={bodystyle}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width='300px'
                    cancelText='取消'
                    okText='确定'

                // footer={null}// 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
                >

                </Modal>
            </div>
        );
    }
}

export default App3