import React, { Component } from 'react'
import { Steps } from 'antd';
import './index.css'

import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"

const Step = Steps.Step;

const steps = [{
    title: '科目选择',

}, {
    title: '题型选择',

}, {
    title: '考试组卷',

}];
class Testpaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            step1Data: {},
            submitData: {}
        };
    }

    next = (value1, value2) => {
        const current = this.state.current + 1;
        this.setState({
            current,
            step1Data: value1,
            submitData: { ...this.state.step1Data, ...value2 }
        }, () => {
            console.log(this.state.current)
            console.log(this.state.step1Data)
            console.log(this.state.submitData)
        });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current, submitData } = this.state;
        return (
            <div className='step-wrap'>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>

                <div className="steps-content">
                    {current === 0 && <Step1 next={this.next} />}
                    {current === 1 && <Step2 next={this.next} />}
                    {current === 2 && <Step3 data={submitData} />}
                </div>

                {/* <div className="steps-action">
                    {
                        current < steps.length - 1
                        // && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                        && <Button type="primary" >下一步</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                    }
                    {
                        current > 0
                        && <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>上一步</Button>
                    }
                </div> */}
            </div>
        );
    }
}

export default Testpaper

