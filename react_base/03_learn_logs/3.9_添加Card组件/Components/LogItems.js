import React from 'react';
import MyDate from './MyDates';
import 'LogItem.css';
import Card from "../ui/Card";

const LogItem = (props) => {
    return (
        <Card className={"item"}>
            <MyDate date={props.date}>
                <div className={"content"}>
                    <h2 className={"desc"}>{props.desc}</h2>
                    <div className={"time"}>{props.time}分钟</div>
                </div>
            </MyDate>
        </Card>
    )
}
export default LogItem;