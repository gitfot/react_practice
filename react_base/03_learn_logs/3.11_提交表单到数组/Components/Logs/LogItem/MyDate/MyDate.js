import React from 'react';
import './MyDate.css';

const MyDate = (props) => {
    //将日期字符串转为日期类型
    const date = new Date(props.date);
    // 获取中文月份（一月、二月、、、）
    const month = date.toLocaleString('zh-CN', {month:'long'});

    return (
        <div className="date">
            <div className="month">
                {month}
            </div>
            <div className="day">
                {/*接将一个 Date 对象作为 JSX 元素的内容是不合法的，所以需要获取期字符类型*/}
                {date.getDate()}
            </div>
        </div>
    );
};

export default MyDate;
