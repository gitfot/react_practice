import React from 'react';
import MyDate from './MyDates';
import 'LogItem.css';

const LogItem = (props) => {
    return (
        <div className={"item"}>
            <MyDate>
                <div className={"content"}>
                    <h2 className={"desc"}>{props.desc}</h2>
                    <div className={"time"}>{props.time}分钟</div>
                </div>
            </MyDate>
        </div>
    )
}
export default LogItem;