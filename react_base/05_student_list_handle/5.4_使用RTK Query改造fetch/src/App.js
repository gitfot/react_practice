import React from 'react';
import StudentList from "./conpoments/StudentList";
import {useGetStudentsQuery} from "./store/studentApi";

function App() {

    const {data: studentData, isSuccess, isLoading, refetch} = useGetStudentsQuery(null, {
        // useQuery可以接收一个对象作为第二个参数，通过该对象可以对请求进行配置
        // selectFromResult: result => {
        //     if (result.data) {
        //         result.data = result.data.filter(item => item.attributes.age < 18);
        //     }
        //
        //     return result;
        // }, // 用来指定useQuery返回的结果

        pollingInterval:0, // 设置轮询的间隔，单位毫秒 如果为0则表示不轮询
        skip:false, // 设置是否跳过当前请求，默认false
        refetchOnMountOrArgChange:false, // 设置是否每次都重新加载数据 false正常使用缓存，
        // true每次都重载数据
        //数字，数据缓存的时间（秒）
        refetchOnFocus:false, // 是否在重新获取焦点时重载数据
        refetchOnReconnect:true, // 是否在重新连接后重载数据
    });

    return (
        <div className="App">
            <button onClick={refetch}>刷新数据</button>
            {(!isLoading && isSuccess) && <StudentList data={studentData}/>}
            {isLoading && <p>数据正在加载中...</p>}
            {!isSuccess && <p>数据加载异常！</p>}
        </div>
    );
}

export default App;
