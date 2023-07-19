/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import './Logs.css';

const Logs = (props) => {

    // 将数据放入JSX中
    const logItemDate = props.logsData.map((item, index) => (
        <LogItem
            delLog = {() => props.delLog(index)}
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}/>
    ));
    return <Card className="logs">{logItemDate}</Card>
};

export default Logs;
