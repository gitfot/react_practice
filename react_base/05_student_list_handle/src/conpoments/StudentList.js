import './StudentList.css'
import Student from "./Student";

const StudentList = (props) => {
    return (
      <table>
          <caption>学生列表</caption>
          <thread>
              <tr>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>地址</th>
              </tr>
          </thread>
          <tbody>
          {props.data.map(stu => <Student key={stu.id} stu={stu.attributes}/> )}
          </tbody>
      </table>  
    );
}

export default StudentList;