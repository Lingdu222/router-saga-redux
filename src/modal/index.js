// import React from 'react'
// import './index.css'

// class Modals extends React.Component {
//     state = { visible: false }
//     handleOk = (e) => {
//         console.log(e);
//         this.setState({
//             visible: false,
//         });
//     }

//     handleCancel = (e) => {
//         console.log(e);
//         this.setState({
//             visible: false,
//         });
//     }

//     render() {
//         return (
//             this.state.visible ?
//                 <div className='modals'>
//                     <header> {this.props.title}</header>
//                     <p className='btn'>
//                         <span className='btn-cancel' onClick={this.handleCancel}>取消</span>
//                         <span className='btn-ok' onClick={this.handleOk}>确定</span>
//                     </p>
//                 </div>
//                 : null
//         );
//     }
// }
// export default Modals



import React, { Component } from 'react'

// export default class Modals extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: '',
//             age: ''
//         }
//     }
//     hander = (key, e) => {
//         let value = e.target.value;
//         this.setState({
//             [key]: value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input value={this.state.name} onChange={(e) => this.hander('name', e)} />
//                 <input value={this.state.age} onChange={(e) => this.hander('age', e)} />
//             </div>
//         )
//     }
// }


export default class Modals extends Component {
    constructor() {
        super()
        this.name = React.createRef()
        this.age = React.createRef()
    }
    Ok = () => {
        let name = this.name.current.value
        let age = this.age.current.value
        console.log(name, age)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.name} />
                <input type='number' ref={this.age} />
                <button onClick={this.Ok}></button>
            </div>
        )
    }
}