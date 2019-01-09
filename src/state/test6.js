import React, { Component } from 'react';

export default class Test extends Component {
    state = {
        count: 0
    };
    //      CheckStatus=(url)=> {
    //     try {
    //         // XMLHTTP = 
    //         new ActiveXObject("Microsoft.XMLHTTP").open("HEAD", url, false).send()
    //         // XMLHTTP.open("HEAD", url, false)
    //         // XMLHTTP.send()
    //         return XMLHTTP.status == 200
    //     } catch (e) {
    //         return false;
    //     }
    // }  
    // componentWillMount() {
    //     fetch({
    //         url: 'http://home.didichuxing.com/didifile/avatar/zhangyuhong.jpg',
    //         type: 'GET',
    //         complete: (response) => {
    //             if (response.status === 200) {
    //                 alert('有效');
    //             } else {
    //                 alert('无效');
    //             }
    //         }
    //     });
    // }

    componentDidMount() {
        fetch('http://home.didichuxing.com/didifile/avatar/zhangyuhong.jpg').then(() => {
            console.log('jjjj')
        })
        // fetch({
        //     url: 'http://home.didichuxing.com/didifile/avatar/zhangyuhong.jpg',
        //     type: 'GET',
        //     complete: (response) => {
        //         console.log('llll')
        //         if (response.status === 200) {
        //             alert('有效');
        //         } else {
        //             alert('无效');
        //         }
        //     }
        // });
        this.button.addEventListener(
            'click',
            () => this.onClick('原生事件'),
            false
        );
    }

    onClick = (info) => {
        console.log(info);
        this.setState({
            count: this.state.count + 1
        });
        this.setState({
            count: this.state.count + 2
        });
    }

    render() {
        console.log('rendered', `count = ${this.state.count}`);
        fetch(
            'https://avatar.csdn.net/0/C/7/3_shiyong1949.jpg'
        )
            .then(res => console.log(res))
            // .then(if(res===404){

            // })
            .catch(e => console.log('错误:', e))
        return (
            <div>
                <h2>setState - 原生事件vsReact事件</h2>
                <p>Count：{this.state.count}</p>
                <button
                    onClick={() => this.onClick('React事件')}
                    ref={input => this.button = input}
                >Click me</button>
            </div>
        )
    }
}