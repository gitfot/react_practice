import ReactDOM from "react-dom/client";
import './index.css';

const App = <div className="logs">
    <div className="logs-item">
        <div className="logs-date">
            <div className="month">三月</div>
            <div className="day">22</div>
        </div>
        <div className="logs-item-desc">
            <h2>学习React</h2>
            <div className="logs-item-time">80分钟</div>
        </div>
    </div>
</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);
