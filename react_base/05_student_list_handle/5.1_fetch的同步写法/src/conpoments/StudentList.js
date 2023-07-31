import './StudentList.css'
import classes from './StudentList.css'
import Student from "./Student";

const StudentList = (props) => {
    return (
        <div className={classes.StudentList}>
            <table>
                <caption>学生列表</caption>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>地址</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map(stu => <Student key={stu.id} stu={stu.attributes}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;