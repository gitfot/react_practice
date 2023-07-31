import React, {useCallback, useEffect, useState} from 'react';
import StudentList from "./conpoments/StudentList";

function App() {
    //学生数据，从远程api获取
    const [studentData, setStudentData] = useState([]);
    // 添加一个state来记录数据是否正在加载,false表示没有加载数据，true表示加载
    const [loading, setLoading] = useState(false);
    // 创建一个state来记录错误信息
    const [error, setError] = useState(null);

    /**
     *
     * @type {(function(*): void)|*}
     */
    const getDataWithAsync = useCallback((url) => {
        setError(null)
        setLoading(true);

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setStudentData(data.data)
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                setError(e);
            });
    },[])

    useEffect(() => {
        getDataWithAsync('http://localhost:1337/api/students')
    },[])

    const loadDataHandler = () => {
        getDataWithAsync('http://localhost:1337/api/students');
    };



    return (
        <div className="App">
            {(!loading && !error) && <StudentList data={studentData}/>}
            {loading && <p>数据正在加载中...</p>}
            {error && <p>数据加载异常！</p>}
        </div>
    );
}

export default App;