import './StudentForm.css';

import {useState} from "react";
import {useAddStudentMutation} from "../../store/api/studentApi";

const StudentForm = ({refetch}) => {
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        gender: '男',
        address: ''
    })

    const [addStudent, {isSuccess:isAddSuccess}] = useAddStudentMutation();
    // const [updateStudent, {isSuccess:isUpdateSuccess}] = useUpdateStudentMutation();

    const nameChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, name: e.target.value}));
    };

    const ageChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, age: +e.target.value}));
    };

    const genderChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, gender: e.target.value}));
    };

    const addressChangeHandler = (e) => {
        setInputData(prevState => ({...prevState, address: e.target.value}));
    };

    const submitHandler = () => {
        addStudent(inputData);
        // 重置数据
        setInputData({
            name: '',
            age: '',
            gender: '男',
            address: ''
        });
        if (isAddSuccess) {
            refetch();
        }
    };

    return (
        <>
            <tr className="student-form">
                <td><input
                    onChange={nameChangeHandler}
                    value={inputData.name}
                    type="text"/></td>
                <td>
                    <select
                        onChange={genderChangeHandler}
                        value={inputData.gender}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input
                    onChange={ageChangeHandler}
                    value={inputData.age}
                    type="text"/></td>
                <td><input
                    onChange={addressChangeHandler}
                    value={inputData.address}
                    type="text"/></td>
                <td>
                    <button
                        onClick={submitHandler}
                    >添加
                    </button>
                </td>
            </tr>
        </>

    );
}

export default StudentForm;
