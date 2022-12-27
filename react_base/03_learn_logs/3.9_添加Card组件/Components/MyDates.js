import React from 'react';
import "/Mydate.css";

const MyDate = (props) => {
    const month = props.date.toLocaleString('zh-CN',{month:long})
    const date = props.date.getDate();
    return (
        <div className={"date"}>
            <div className={"month"}>{month}</div>
            <div className={"date"}>{date}</div>
        </div>
    )
}

export default MyDate;