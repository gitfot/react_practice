import React, {useEffect, useState} from 'react';
import StudentList from "./conpoments/StudentList";

function App() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/students')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setStudentData(data.data)
            })
            .catch(() => {
            });
    },[])
    return (
        <div className="App">
            <StudentList data={studentData}/>
        </div>
    );
}

export default App;
