
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { useState, useEffect } from 'react';
import FormDataStudent from './components/FormDataStudent';
import ListStudents from './components/ListStudents';



function App() {
  const [listStudent, setListStudent] = useState([]);
  // console.log(listStudent);
  const [studentEdit, setStudentEdit] = useState({ action: "add", value: "" });

  const getAllApi = () => {
    axios.get('http://localhost:8000/students')
      .then((res) => setListStudent(res.data))
      .catch((error) => console.log("Error: ", error))
  }

  const addStudent = async (student) => {
    await axios.post('http://localhost:8000/students', student)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));

    getAllApi();
  }


  const editStudent = (student) => {
    setStudentEdit({ action: "edit", value: student })
  }

  const updateStudent = async (student) => {
    // console.log(student);
    await axios.put(`http://localhost:8000/students/${student.id}`, student)
      .then((res) => console.log(res))
      .catch(err => console.error(err))

    getAllApi();
  }

  const deleteStudent = async (studentID) => {
    console.log(studentID);
    await axios.delete(`http://localhost:8000/students/${studentID}`)
      .then((res) => console.log(res))
      .catch((error) => console.error(error))

    getAllApi();
  }

  useEffect(() => {

    getAllApi();
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-5">STUDENT MANAGER</h2>
      <div className="row justify-content-between align-self-stretch">
        <div className='col-5'>
          <FormDataStudent addStudent={addStudent} listStudent={listStudent} studentEdit={studentEdit} setStudentEdit={setStudentEdit} updateStudent={updateStudent} />
        </div>

        <div className='col-6'>
          <ListStudents listStudent={listStudent} editStudent={editStudent} deleteStudent={deleteStudent} />
        </div>
      </div>
    </div>
  );
}

export default App;
