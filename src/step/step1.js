import React, { Component } from 'react'
import { Button, Select } from 'antd';
// import './index.css'
const ButtonGroup = Button.Group;
const Option = Select.Option;


export class Step1 extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className='step1'>
                <ButtonGroup>
                    <span className='title'> 课程体系</span>
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                    <Button>D</Button>
                </ButtonGroup>
                <div className='select'>
                    <span className='title'> 选择课程</span>
                    <Select defaultValue="请选择课程" style={{ width: 220 }} onChange={this.handleChange}>
                        <Option value="语文">语文</Option>
                        <Option value="数学">数学</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="英语">英语</Option>
                    </Select>
                </div>
                <ButtonGroup>
                    <span className='title'> 试题来源</span>
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                    <Button>D</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Step1
