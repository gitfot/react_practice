import LogItem from "./LogItems";
import './Logs,css';
import Card from "../ui/Card";

const logs = () => {

    const logsDate = [
        {
            id: "001",
            date: new Date(2021, 1, 20 , 18, 30),
            desc: "你好阿！",
            time: 20
        },
        {
            id: "002",
            date: new Date(2021, 1, 21, 12, 30),
            desc: "一如既往。",
            time: 30
        },
        {
            id: "003",
            date: new Date(2021, 1, 22, 10, 13),
            desc: "保重！",
            time: 40
        }
    ]

    const logItemDate = logsDate.map(e => <LogItem key={e.id} date={e.date} desc={e.desc} time={e.time}></LogItem>)

    return <Card className={"logs"}>
        {
            logItemDate
        }
    </Card>
};

export default logs;