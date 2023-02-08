import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Control from './components/Control';
import FormManager from './components/FormManager';
import ListStudent from './components/listStudent/ListStudent';

import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';

const getStudentList = [
  { id: 1, studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2003-04-15", birthPlace: "HN", address: "Số 1 Phạm Hùng" },
  { id: 2, studentId: "SV002", studentName: "Nguyễn Thị B", age: 22, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "Số 1 Trần Duy Hưng" },
  { id: 4, studentId: "SV003", studentName: "Nguyễn Văn C", age: 18, sex: true, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" },
  { id: 5, studentId: "SV004", studentName: "Nguyễn Thị D", age: 29, sex: false, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" },
  { id: 6, studentId: "SV005", studentName: "Nguyễn Văn E", age: 17, sex: true, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" }
]

function App() {
  const [listStudent, setListStudent] = useState(getStudentList);
  const [searchData, setSearchData] = useState([]);
  const [sortDir, setSortDir] = useState("");
  const [sortBy, setSortBy] = useState("");

  const displayListStudent = searchData == "" ? listStudent : searchData;


  const handleSearch = (keySearch) => {
    let searchDataList = listStudent.filter(student => student.studentName.includes(keySearch));
    setSearchData(searchDataList);
  }

  const handleDeleteStudent = (IdDelete) => {
    let deleteStudent = listStudent.filter(student => student.studentId !== IdDelete);
    setListStudent(deleteStudent);
    setSearchData("");
  }

  const handleSortList = (sortDir, sortBy) => {
    setSortDir(sortDir);
    setSortBy(sortBy);
  }

  if (sortDir !== '') {
    if (sortDir == "studentName") {
      if (sortBy == "ASC") {
        displayListStudent.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0)
      } else {
        displayListStudent.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0)
      }
    } else {
      if (sortBy == "ASC") {
        displayListStudent.sort((a, b) => (a.age > b.age) ? 1 : (a.age < b.age) ? -1 : 0);
      } else {
        displayListStudent.sort((a, b) => (a.age > b.age) ? -1 : (a.age < b.age) ? 1 : 0);
      }
    }
  }



  return (
    <div className="App">
      <Row>
        <Col span={14} className="shadow bg-body rounded">
          <Control handleSearch={handleSearch} handleSortList={handleSortList} />
          <ListStudent listStudent={displayListStudent} handleDeleteStudent={handleDeleteStudent} />
        </Col>

        <Col span={1}></Col>

        <Col span={9} className="shadow bg-body rounded">
          <FormManager />
        </Col>
      </Row>
    </div>
  );
}

export default App;
