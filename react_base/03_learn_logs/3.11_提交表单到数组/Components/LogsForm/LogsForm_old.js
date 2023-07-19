import React from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css';

const LogsForm_old = () => {
    // 创建三个变量，用来存储表单中的数据
    let inputDate = '';
    let inputDesc = '';
    let inputTime = 0;

    const dateChangeHandler = (e) => {
        // event.target 执行的是触发事件的对象（DOM对象）
        inputDate = e.target.value;
    };

    const descChangeHandler = (e) => {
        inputDesc = e.target.value;
    };

    const timeChangeHandler = (e) => {
        inputTime = e.target.value;
    };

    const formSubmitHandler = (e) => {
        // 取消表单的默认行为
        e.preventDefault();
        // 获取表单项中的数据日期、内容、时长,将数据拼装为一个对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        };
        window.alert(desc.value);
    };

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input onChange={descChangeHandler} id="desc" type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} id="time" type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm_old;
