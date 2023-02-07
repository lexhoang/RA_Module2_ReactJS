import React, { useEffect, useState } from 'react'
import { Container, Grid, TextField, Button, ButtonGroup } from '@mui/material';
import swal from 'sweetalert';

// const LISTTODO = [{ id: "001", task: "Thức dậy" }, { id: "002", task: "Ăn sáng" }, { id: "003", task: "Đi ngủ" }];
// localStorage.setItem("listTodo", JSON.stringify(LISTTODO));

const getListTodo = JSON.parse(localStorage.getItem("listTodo"));

export default function TodoList() {
    const [listTask, setListTask] = useState(getListTodo);
    const [taskId, setTaskId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [editTaskId, setEditTaskId] = useState("");
    const [editTaskName, setEditTaskName] = useState("");


    const handleAddNew = () => {
        listTask.forEach((task) => {
            if (task.id !== taskId && taskName.trim() !== "") {
                setListTask([...listTask, { id: taskId, task: taskName }]);
                setTaskId("");
                setTaskName("");
                swal("Thêm việc cần làm thành công", "", "success");

            } else {
                swal("Thêm việc cần làm không hợp lệ", "", "error");
            }
        });
    }

    const handleDelete = (idDelete) => {
        swal({
            title: "Bạn chắc chắn muốn xóa công việc này?",
            text: "Công việc sẽ bị xóa vĩnh viễn, bạn chắc chắn muốn xóa chứ!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let listDelete = listTask.filter(task => task.id !== idDelete)
                    setListTask(listDelete);
                    swal("Xóa công việc thành công", "", "success");
                } else {
                    swal("Công việc chưa được xóa!", "", "warning");
                }
            });
    }

    const handleEdit = (idEdit) => {
        setEditTaskId(idEdit);
        setEditTaskName("");
    }

    const handleUpdate = (idEdit) => {
        let listTaskUpdate = [];
        listTask.forEach((task) => {
            if (task.id === idEdit) {
                listTaskUpdate.push({ id: task.id, task: editTaskName });
            } else {
                listTaskUpdate.push(task);
            }
        });
        setListTask(listTaskUpdate);
        setEditTaskId("");
        swal("Sửa việc cần làm thành công", "", "success");
    }

    useEffect(() => {
        localStorage.setItem("listTodo", JSON.stringify(listTask));
    }, [listTask])


    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={7} my={4} className="mx-auto">
                        <Grid container>
                            <Grid item xs={3}>
                                <TextField size='small' id="outlined-basic" label="ID" variant="outlined"
                                    value={taskId}
                                    onChange={(e) => setTaskId(e.target.value)} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField size='small' fullWidth id="outlined-basic" label="Task" variant="outlined"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)} />
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="contained" color="success" onClick={() => handleAddNew()}>Contained</Button>
                            </Grid>
                        </Grid>

                        <table className="my-5 table table-striped table-inverse table-responsive">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>STT</th>
                                    <th>ID</th>
                                    <th>Task</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listTask.map((element, index) => {
                                        return (
                                            <tr key={index}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{element.id} </td>
                                                <td>
                                                    {
                                                        element.id !== editTaskId ?
                                                            <p> {element.task}</p>
                                                            :
                                                            <TextField size='small' id="outlined-basic" variant="outlined"
                                                                value={element.id == editTaskId ? (editTaskName || element.task) : element.task}
                                                                onChange={(e) => setEditTaskName(e.target.value)} />
                                                    }
                                                </td>
                                                <td>
                                                    <ButtonGroup variant="contained" aria-label="outlined button group">
                                                        {
                                                            element.id !== editTaskId ?
                                                                <Button color="primary" onClick={() => handleEdit(element.id)}>Edit</Button>
                                                                :
                                                                <Button color="secondary" onClick={() => handleUpdate(element.id)}>Update</Button>
                                                        }
                                                        <Button color="error" onClick={() => handleDelete(element.id)}>Delete</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
