import './StudentList.css'
import Student from "./Student";
import StudentForm from "./StudentForm";
import {useGetStudentsQuery} from "../../store/api/studentApi";

const StudentList = () => {

    const {data, isSuccess, isLoading, refetch} = useGetStudentsQuery();

    if ((!isLoading && isSuccess)) {
        return (
            <div>
                <button onClick={refetch}>刷新数据</button>
                <table>
                    <caption>学生列表</caption>
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>地址</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(stu =>
                        <Student key={stu.id} id={stu.id} data={stu.attributes}/>
                    )}
                    </tbody>

                    <tfoot>
                        <StudentForm refetch={refetch}/>
                    </tfoot>
                </table>
            </div>
        );
    } else {
        return (<p>数据正在加载中...</p>)
    }
};

export default StudentList;
