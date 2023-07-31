import {useCallback, useContext, useState} from "react";
import StudentContext from "../store/StudentContext";

const Student = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const ctx = useContext(StudentContext);

    const delStudentWithAwait = useCallback(async (url) => {
        try{
            setLoading(true);
            setError(null);
            const response = await fetch(url,{
                method:'delete'
            });
            // 判断是否成功
            if(!response.ok){
                throw new Error('删除失败！');
            }
            ctx.getStudentList(); //触发刷新列表
        }catch (e){
            setError(e);
        }finally {
            setLoading(false);
        }
    },[])

    const deleteHandler = () => {
        delStudentWithAwait(`http://localhost:1337/api/students/${props.id}`);
    };

    return (
        <>
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.gender}</td>
                <td>{props.data.age}</td>
                <td>{props.data.address}</td>
                <td><button onClick={deleteHandler}>删除</button></td>
            </tr>

            {loading && <tr>
                <td colSpan={5}>正在删除数据...</td>
            </tr>}
            {error && <tr>
                <td colSpan={5}>删除失败...</td>
            </tr>}
        </>

    );
}

export default Student;