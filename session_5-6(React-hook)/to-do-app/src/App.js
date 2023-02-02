import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Đi chơi",
    },
    {
      id: 2,
      name: "Đi học",
    },
    {
      id: 3,
      name: "Đi làm",
    }
  ]);

  const handleAddNew = (data) => {
    setTodoList(todoList => [...todoList, { id: todoList.length + 1, name: data }])
  }

  const handleDelete = (paramId) => {
    console.log("Xóa todo có id: " + paramId);
    let arrTodo = todoList.filter(element => element.id !== paramId);
    setTodoList(arrTodo);
  }

  const handleUpdate = (data, paramId) => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === paramId) {
        todoList[i].name = data;
        setTodoList(todoList);
      }
    }
  }


  return (
    <div className="App">
      <Form handleAddNew={handleAddNew} />
      <TodoList todoList={todoList} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
