import React, { useState, useEffect } from "react";

export default function InputList() {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("In progress");
  const [listTask, setListTask] = useState([]);
  const [taskId, setTaskId] = useState(listTask.length);
  const handleAdd = () => {
    setListTask([
      ...listTask,
      { taskName: taskName, status: status, id: listTask.length },
    ]);
    setTaskName("");
  };
  useEffect(() => {
    let listTaskLocal = JSON.parse(localStorage.getItem("listTask"));
    if (listTaskLocal == null) {
      listTaskLocal = [];
      localStorage.setItem("listTask", JSON.stringify(listTaskLocal));
    } else {
      setListTask(listTaskLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(listTask));
  }, [listTask]);
  const handleChange = (e, id) => {
    let dataEdit = listTask.map((task) => {
      if (task.id === id) {
        if (task.status !== "Completed") {
          return { ...task, taskName: e };
        } else {
          return task;
        }
      } else {
        return task;
      }
    });
    setListTask(dataEdit);
  };
  const toogleInput = (id) => {
    console.log(id);
    console.log(document.getElementById(`input${id}`));
    document.getElementById(`input${id}`).removeAttribute("disabled");
  };
  const keyCode = (e, id) => {
    if (e.keyCode === 13) {
      console.log(document.getElementById(`input${id}`));
      document.getElementById(`input${id}`).setAttribute("disabled", "");
    }
  };
  const handleDelete = (element) => {
    console.log(listTask);
    let dataDelete = listTask.filter((task) => element.id !== task.id);
    dataDelete.forEach((data, index) => (data.id = index));
    setListTask(dataDelete);
    console.log(listTask);
  };

  const handleChangeStatus = (element) => {
    let dataChange = listTask.map((task) => {
      if (element.id === task.id) {
        element.status = "Completed";
        document.getElementById(`${task.id}`).classList.add("completed");
        return {
          ...element,
        };
      } else {
        return task;
      }
    });
    setListTask(dataChange);
  };

  let elementTableList = listTask.map((task, index) => {
    return (
      <tr key={task.id} className="" id={task.id}>
        <td>{index + 1}</td>
        <td>
          <input
            key={"task" + task.id}
            type={"text"}
            value={task.taskName}
            onKeyDown={(e, id) => keyCode(e, task.id)}
            onChange={(e, id) => handleChange(e.target.value, task.id)}
            id={"input" + task.id}
            disabled
            className="form-control"
          ></input>
        </td>
        <td>{task.status}</td>
        <td>
          <button className="btn btn-info" onClick={(id) => toogleInput(task.id)}>Edit</button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => handleDelete(task)}>Delete</button>
        </td>
        <td>
          <button className="btn btn-success" onClick={() => handleChangeStatus(task)}>Finish</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="container">
      <label>Name of task:</label>
      <div className="row">
        <div className="col-9">
          <input
            type={"text"}
            name="taskName"
            placeholder="Write your task's name here"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" onClick={handleAdd}>Add</button>
        </div>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Task's Name</th>
            <th>Status</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>{elementTableList}</tbody>
      </table>
    </div>
  );
}
