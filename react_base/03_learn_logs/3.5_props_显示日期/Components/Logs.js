import LogItem from "./LogItems";
import './Logs,css';

const logs = () => {
    return <div className={"logs"}>
        <LogItem date={new Date()} desc={"learn form now"} time={"50"}></LogItem>
    </div>
};

export default logs;