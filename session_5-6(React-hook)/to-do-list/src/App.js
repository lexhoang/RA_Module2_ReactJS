import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import { useState } from 'react';
import sweetAlert from 'sweetalert';


function App() {
  const [list, setList] = useState([
    { id: 1, content: "Đi chơi" },
    { id: 2, content: "Đi học" },
    { id: 3, content: "Đi làm" },
  ]);

  const handleAddNew = (idAdd, dataAdd) => {
    if (idAdd.trim() !== "" && dataAdd.trim() !== "") {
      setList((list) => [...list, { id: idAdd, content: dataAdd }]);
    } else {
      sweetAlert("Hãy nhập đủ dữ liệu", "Bạn chưa nhập ID hoặc công việc cần làm!!!", "error")
    }
  }

  const handleDelete = (idDelete) => {
    console.log(list);
    let listTodo = [];
    listTodo = list.filter((element) => element.id !== idDelete)
    console.log(listTodo);
    setList(listTodo)
  }

  const handleUpdate = (idUpdate, data) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === idUpdate && data.trim() !== '') {
        list[i].id = idUpdate;
        list[i].content = data;
        setList(list);
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="col-7 my-3 mx-auto p-3 rounded-3 bg-form">
          <Form handleAddNew={handleAddNew} />
          <TodoList list={list} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </div>
      </div>
    </div >
  );
}

export default App;
