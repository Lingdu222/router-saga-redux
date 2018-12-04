import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import './index.css'

import Step1 from "./step1"
import Step2 from "./step2"
import Step4 from "./step4"

const Step = Steps.Step;

const steps = [{
    title: '科目选择',
    content: 'mmm',
}, {
    title: '题型选择',
    content: 'Second-content',
}, {
    title: '考试组卷',
    content: 'Last-content',
}];
class Testpaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div className='step-wrap'>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>

                <div className="steps-content">
                    {/* {steps[current].content} */}
                    {current == 0 && <Step1 />}
                    {current == 1 && <Step2 />}
                    {current == 2 && <Step4 />}
                </div>

                <div className="steps-action">
                    {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                    }
                    {
                        current > 0
                        && <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>上一步</Button>
                    }
                </div>
            </div>
        );
    }
}

export default Testpaper

