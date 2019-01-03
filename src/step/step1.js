import React from 'react'
import {
    Form,
    Select,
    Radio,
    Button,
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                console.log('Received values of form: ', values);
                this.props.next(values, {})
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 17 },
        };
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormItem
                    {...formItemLayout}
                    label="课程体系"
                >
                    {getFieldDecorator('course')(
                        <RadioGroup>
                            <RadioButton value="数学">数学</RadioButton>
                            <RadioButton value="语文">语文</RadioButton>
                            <RadioButton value="科学">科学</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="课程选择"
                // hasFeedback
                >
                    {getFieldDecorator('course2', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Select placeholder="请选择一门课程">
                            <Option value="语文">语文</Option>
                            <Option value="数学">数学</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="试题来源"
                >
                    {getFieldDecorator('course3')(
                        <RadioGroup>
                            <RadioButton value="一班">一班</RadioButton>
                            <RadioButton value="二班">二班</RadioButton>
                            <RadioButton value="三班">三班</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 11 }}
                >
                    <Button type="primary" htmlType="submit">下一步</Button>
                </FormItem>
            </Form >
        );
    }
}
const Step1 = Form.create()(Demo);
export default Step1







// import React, { Component } from 'react'
// import { Button, Select } from 'antd';
// // import './index.css'
// const ButtonGroup = Button.Group;
// const Option = Select.Option;


// export class Step1 extends Component {
//     handleChange = (value) => {
//         console.log(`selected ${value}`);
//     }
//     render() {
//         return (
//             <div className='step1'>
//                 <ButtonGroup>
//                     <span className='title'> 课程体系</span>
//                     <Button>A</Button>
//                     <Button>B</Button>
//                     <Button>C</Button>
//                     <Button>D</Button>
//                 </ButtonGroup>
//                 <div className='select'>
//                     <span className='title'> 选择课程</span>
//                     <Select defaultValue="请选择课程" style={{ width: 220 }} onChange={this.handleChange}>
//                         <Option value="语文">语文</Option>
//                         <Option value="数学">数学</Option>
//                         <Option value="disabled" disabled>Disabled</Option>
//                         <Option value="英语">英语</Option>
//                     </Select>
//                 </div>
//                 <ButtonGroup>
//                     <span className='title'> 试题来源</span>
//                     <Button>A</Button>
//                     <Button>B</Button>
//                     <Button>C</Button>
//                     <Button>D</Button>
//                 </ButtonGroup>
//             </div>
//         )
//     }
// }

// export default Step1
