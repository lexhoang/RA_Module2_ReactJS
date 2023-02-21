import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { useState, useEffect } from 'react';
import FormDataStudent from './components/FormDataStudent';
import ListStudents from './components/ListStudents';


function App() {
  const [listStudent, setListStudent] = useState([]);
  const [studentEdit, setStudentEdit] = useState({ action: "", value: "", color: "success" });

  const getAllAPI = () => {
    axios.get('http://localhost:8000/students')
      .then((response) => setListStudent(response.data))
      .catch((error) => console.error(error))
  }

  const postStudentApi = async (student) => {
    await axios.post('http://localhost:8000/students', student)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));

    getAllAPI()
  }

  const handleEditStudent = (student) => {
    setStudentEdit({ action: "edit", value: student, color: "outline-success" });
    console.log(student);
  }

  const putStudentApi = async (student) => {
    await axios.put(`http://localhost:8000/students/${student.id}`, student)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));

    getAllAPI()
  }

  const deleteStudentAPI = async (studentID) => {
    await axios.delete(`http://localhost:8000/students/${studentID}`)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));

    getAllAPI()
  }

  useEffect(() => {

    getAllAPI();
  }, [])

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-5">STUDENT MANAGER</h2>
      <div className="row justify-content-between align-self-stretch">
        <div className='col-5'>
          <FormDataStudent postStudentApi={postStudentApi} studentEdit={studentEdit} setStudentEdit={setStudentEdit} putStudentApi={putStudentApi} />
        </div>

        <div className='col-6'>
          <ListStudents listStudent={listStudent} deleteStudentAPI={deleteStudentAPI} handleEditStudent={handleEditStudent} />
        </div>
      </div>
    </div>
  );
}

export default App;
