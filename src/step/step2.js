import React, { Component } from 'react'
import { Button, Select, Input } from 'antd';
// import './index.css'
const ButtonGroup = Button.Group;
const Option = Select.Option;


class Step2 extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className='step2'>
                <ButtonGroup>
                    <span className='title'> 考试时长</span>
                    <Button>40分钟</Button>
                    <Button>60分钟</Button>
                    <Button>90分钟</Button>
                    <Button>120分钟</Button>
                </ButtonGroup>
                <div className='select'>
                    <span className='title'> 选择课程</span>
                    <Select defaultValue="请选择课程" style={{ width: 100, marginRight: 10 }} onChange={this.handleChange}>
                        <Option value="语文">语文</Option>
                        <Option value="数学">数学</Option>
                        <Option value="英语">英语</Option>
                    </Select>
                    <Select defaultValue="请选择课程" style={{ width: 100, marginRight: 10 }} onChange={this.handleChange}>
                        <Option value="语文">语文</Option>
                        <Option value="数学">数学</Option>
                        <Option value="英语">英语</Option>
                    </Select>
                    <button>确定添加</button>
                </div>
                <ButtonGroup >
                    <span className='title'> 选择题难度</span>
                    <Button>简单题</Button>
                    <Button>较易题</Button>
                    <Button>一般题</Button>
                    <Button>较难题</Button>
                    <Button>困难题</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <span className='title'> 简单题难度</span>
                    <Button>简单题</Button>
                    <Button>较易题</Button>
                    <Button>一般题</Button>
                    <Button>较难题</Button>
                    <Button>困难题</Button>
                </ButtonGroup>
                <div>
                    <span className='title'> 预估考试时长</span>
                    <Input style={{ width: 80 }} defaultValue="_分钟" />

                </div>
            </div>
        )
    }
}

export default Step2
