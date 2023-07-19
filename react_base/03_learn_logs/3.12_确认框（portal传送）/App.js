import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css';
import {useState} from "react";

const App = () => {

    const [logsData, setLogsData] = useState([
        {
            id: '001',
            // date: new Date(2021, 1, 20, 18, 30),
            date: "2022-02-5 8:30",
            desc: '学习九阳神功',
            time: 30
        },
        {
            id: '002',
            // date: new Date(2022, 2, 10, 12, 30),
            date: "2022-02-10 12:30",
            desc: '学习降龙十八掌',
            time: 20
        },
        {
            id: '003',
            // date: new Date(2022, 2, 11, 11, 30),
            date: "2022-02-11 11:30",
            desc: '学习JavaScript',
            time: 40
        },
        {
            id: '004',
            // date: new Date(2022, 2, 15, 10, 30),
            date: "2022-02-15 10:30",
            desc: '学习React',
            time: 80
        }
    ]);

    /**
     * 想数组中添加记录
     * @param log
     */
    const saveLogHandler = (log) => {
        log.id = Date.now() + '';
        setLogsData([log, ...logsData]);
    }

    /**
     * 从数组中删除记录
     * @param index
     */
    const delLogByIndex = (index) => {
        setLogsData(prevState => {
            const newLog = [...prevState];
            newLog.splice(index, 1);
            return newLog;
        });
    };

    return <div className="app">
        <LogsForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData} delLog={delLogByIndex}/>
    </div>;
};

// 导出App
export default App;
