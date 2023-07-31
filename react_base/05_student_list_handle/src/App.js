import React, {useCallback, useEffect, useState} from 'react';
import StudentList from "./conpoments/StudentList";
import StudentContext from "./store/StudentContext";

function App() {
    //学生数据，从远程api获取
    const [studentData, setStudentData] = useState([]);
    // 添加一个state来记录数据是否正在加载,false表示没有加载数据，true表示加载
    const [loading, setLoading] = useState(false);
    // 创建一个state来记录错误信息
    const [error, setError] = useState(null);

    /**
     * 同步方法调用
     * @type {(function(*): Promise<void>)|*}
     */
    const getDataWithAwait = useCallback(async (url) => {
        try{
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                setStudentData(data.data);
            }else{
                throw new Error('数据加载失败！');
            }
        }catch (e){
            console.log(e)
            setError(e);
        }finally {
            setLoading(false);
        }
    },[])

    /**
     * 异步方法调用
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

    const getStudentList = () => {
        getDataWithAsync('http://localhost:1337/api/students');
    };


    return (
        <StudentContext.Provider value={{getStudentList}}>
            <div className="App">
                <button onClick={getStudentList}>刷新数据</button>
                {(!loading && !error) && <StudentList data={studentData}/>}
                {loading && <p>数据正在加载中...</p>}
                {error && <p>数据加载异常！</p>}
            </div>
        </StudentContext.Provider>
    );
}

export default App;
