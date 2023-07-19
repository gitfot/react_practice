import React, {useState} from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";

const LogItem = (props) => {

    //记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false);

    //取消函数
    const cancelHandler = () => {
        setShowConfirm(false);
    };

    // 确认函数
    const confirmHandler = () => {
        props.delLog();
        setShowConfirm(false);
    };

    return (
        <Card className="item">
            {showConfirm &&
                <ConfirmModal
                    confirmText="该操作不可恢复！请确认"
                    onCancel={cancelHandler}
                    onOk={confirmHandler}
                />
            }

            <MyDate date={props.date}/>
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>

            <div>
                <div onClick={() => setShowConfirm(true)} className='delete'>×</div>
            </div>
        </Card>
    );
};


export default LogItem;
