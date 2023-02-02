import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';


function App() {
  const [work, setWork] = useState(["Đi học", "Đi chơi"]);

  const handleDelete = (id) => {
    let listWork = work.filter((element, index) => index !== id);
    setWork(listWork);
  }

  const handleAddNew = (data) => {
    setWork(work => [...work, data]);
  }

  const handleUpdate = (data, index) => {
    // console.log("data", data, "index", index);
    let arr = work
    arr[index] = data
    console.log(arr);
    console.log(index);
    setWork(arr);
  }

  return (
    <div className="App">
      <Form handleAddNew={handleAddNew} />
      <List handleDelete={handleDelete} list={work} setList={setWork} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
