import React from 'react';
import {useAddStudentMutation, useGetStudentsQuery} from "./store/studentApi";

const App = () => {

    // 调用Api查询数据
    // 这个钩子函数它会返回一个对象作为返回值，请求过程中相关数据都在该对象中存储
    const {data, isSuccess, isGetLoading} = useGetStudentsQuery(); // 调用Api中的钩子查询数据
    const [addStudent, { isAddLoading }] = useAddStudentMutation();

    const handleAddStudent = () => {
        addStudent({
            data: {
                name: 'John Doe',
                age: 24,
                gender: '男',
                address:'广州'
            }
        })
    }

    return (
        <div>
            {isGetLoading && <p>数据加载中...</p>}
            {isSuccess && data.data.map(item => <p key={item.id}>
                {item.attributes.name} ---
                {item.attributes.age} ---
                {item.attributes.gender} ---
                {item.attributes.address}
            </p>)}
            <button onClick={handleAddStudent}>添加一组模拟数据</button>
        </div>
    );
};

export default App;
