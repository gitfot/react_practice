import React, {useEffect} from 'react';
import StudentList from "./conpoments/StudentList";
import StudentContext from "./store/StudentContext";
import useFetch from "./hooks/useFetch";

function App() {

    const {data:studentData, loading, error, fetchData} = useFetch({url:'/students'}, null);

    useEffect(() => {
        fetchData()
    },[])

    const getStudentList = () => {
        fetchData();
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
