import React, { Component } from 'react'
import { Button, Select, Input, Checkbox, DatePicker } from 'antd';
// import './index.css'
const ButtonGroup = Button.Group;
const Option = Select.Option;


class Step4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            formLayout: '数学',
        };

    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }
    handleFormLayoutChange = (e) => {
        this.setState({ formLayout: e.target.value });
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }
    render() {
        const { startValue, endValue, endOpen } = this.state
        return (
            <div className='step2'>
                <ButtonGroup onChange={this.handleFormLayoutChange} layout={this.state.formLayout}>
                    <span className='title'> 所教学科</span>
                    <Button>数学</Button>
                    <Button>英语</Button>
                    <Button>科学</Button>
                    <Button>物理</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup>
                    <span className='title'> 所教班级</span>
                    <Button>1班</Button>
                    <Button>2班</Button>
                    <Button>3班</Button>
                    <Button>4班</Button>
                </ButtonGroup>
                <div>
                    <span className='title'> 作业名称</span>
                    <Input style={{ width: '32%' }} defaultValue="请输入作业名称" />
                </div>
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
                <div className='select'>
                    <span className='title'> 习题难度</span>
                    <Checkbox onChange={this.onChange}>简单</Checkbox>
                    <Checkbox onChange={this.onChange}>较易</Checkbox>
                    <Checkbox onChange={this.onChange}>一般</Checkbox>
                    <Checkbox onChange={this.onChange}>较难</Checkbox>
                    <Checkbox onChange={this.onChange}>困难</Checkbox>
                </div>
                <div className='select'>
                    <span className='title'> 预估考试时长</span>
                    <Input style={{ width: 80 }} defaultValue="_分钟" />
                </div>
                <aside >
                    <div className='select'>
                        <span className='title'> 作业开始时间</span>
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            value={startValue}
                            placeholder="请输入开始时间"
                            onChange={this.onStartChange}
                            onOpenChange={this.handleStartOpenChange}
                        />
                    </div>
                    <div className='select'>
                        <span className='title'> 作业结束时间</span>
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            value={endValue}
                            placeholder="请输入结束时间"
                            onChange={this.onEndChange}
                            open={endOpen}
                            onOpenChange={this.handleEndOpenChange}
                        />
                    </div>
                </aside>
            </div>
        )
    }
}

export default Step4
