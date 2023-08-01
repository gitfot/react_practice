import './StudentList.css'
import Student from "./Student";
import StudentForm from "./StudentForm";

const StudentList = (props) => {
    return (
        <div>
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
                {props.data.map(stu =>
                    <Student key={stu.id} id={stu.id} data={stu.attributes}/>
                )}
                </tbody>

                <tfoot><StudentForm/></tfoot>
            </table>
        </div>
    );
};

export default StudentList;