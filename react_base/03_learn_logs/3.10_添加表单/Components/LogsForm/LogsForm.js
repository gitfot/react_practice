import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css';

const LogsForm = () => {

    const [inputs, setInputs] = useState({});

    const dateChangeHandler = (e) => {
        const { name, value } = e.target; // 获取属性名和值
        setInputs(values => ({...values, [name]:value}));
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    }

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} id="date" type="date" name="date" value={inputs.date || ""}/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input onChange={dateChangeHandler} id="desc" type="text" name="desc" value={inputs.desc || ""}/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={dateChangeHandler} id="time" type="number" name="time" value={inputs.time || ""}/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;
