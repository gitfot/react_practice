import React, {useEffect, useState} from 'react';
import StudentList from "./conpoments/StudentList";

function App() {
    //学生数据，从远程api获取
    const [studentData, setStudentData] = useState([]);
    // 添加一个state来记录数据是否正在加载,false表示没有加载数据，true表示加载
    const [loading, setLoading] = useState(false);
    // 创建一个state来记录错误信息
    const [error, setError] = useState(null);


    /**
     * 异步调用方法
     * @param url
     */
    const getDataWithAsync = (url) => {
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
    }

    /**
     * 同步调用：
     *  注意：
     *      1、使用 await 关键字可以暂停函数的执行，直到 Promise 完成并返回其解析值。
     *      2、await 关键字只能在异步函数内部使用
     */
    const getDataWithAwait = async (url) => {
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
            setError(e);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDataWithAsync('http://localhost:1337/api/students')
    },[])


    return (
        <div className="App">
            {(!loading && !error) && <StudentList data={studentData}/>}
            {loading && <p>数据正在加载中...</p>}
            {error && <p>数据加载异常！</p>}
        </div>
    );
}

export default App;
