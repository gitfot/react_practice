import {useState} from "react";
import StudentForm from "./StudentForm";
import {useDelStudentMutation} from "../../store/api/studentApi";

const Student = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const [delStudent, {isSuccess}] = useDelStudentMutation();

    const deleteHandler = () => {
        delStudent(props.id);
    };

    const cancelEdit = () => {
        setIsEdit(false);
    };

    return (
        <>
            {(!isEdit && !isSuccess) &&
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.gender}</td>
                    <td>{props.data.age}</td>
                    <td>{props.data.address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button onClick={() => setIsEdit(true)}>修改</button>
                    </td>
                </tr>
            }

            {
                isSuccess && <tr>
                    <td colSpan="5">
                        数据已删除！
                    </td>
            </tr>
            }
            {isEdit && <StudentForm stuId={props.stu.id} onCancel={cancelEdit}/>}
        </>
    );
}

export default Student;
