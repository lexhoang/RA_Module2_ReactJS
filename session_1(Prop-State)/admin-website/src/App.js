import "./App.css";
import React, { Component } from "react";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

// const listStudents = [
//   {
//     id: 1,
//     code: "SV001",
//     name: "Nguyễn Văn A",
//     age: 20,
//     gender: true,
//     birthday: "1/1/1991",
//     country: "Việt Nam",
//     address: "Hà Nội",
//   },
//   {
//     id: 2,
//     code: "SV002",
//     name: "Nguyễn Văn B",
//     age: 21,
//     gender: true,
//     birthday: "2/2/1992",
//     country: "USA",
//     address: "Tp.HCM",
//   },
//   {
//     id: 3,
//     code: "SV003",
//     name: "Nguyễn Thị C",
//     age: 22,
//     gender: false,
//     birthday: "3/3/1993",
//     country: "Việt Nam",
//     address: "Đà Nẵng",
//   },
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isEdit: false,
      isAdd: false,
      formInfo: {},
      valueSearch: "",
      sortDir: "",
      sortBy: "",
      data: [
        {
          id: 1,
          code: "SV001",
          name: "Nguyễn Văn A",
          age: 20,
          gender: true,
          birthday: "1/1/1991",
          country: "Việt Nam",
          address: "Hà Nội",
        },
        {
          id: 2,
          code: "SV002",
          name: "Nguyễn Văn B",
          age: 21,
          gender: true,
          birthday: "2/2/1992",
          country: "USA",
          address: "Tp.HCM",
        },
        {
          id: 3,
          code: "SV003",
          name: "Nguyễn Thị C",
          age: 22,
          gender: false,
          birthday: "3/3/1993",
          country: "Việt Nam",
          address: "Đà Nẵng",
        },
      ],
    };
  }
  handleToggleOn = () => {
    this.setState({ isToggle: true, formInfo: {}, isAdd: true });
  };

  handleToggleOff = () => {
    this.setState({ isToggle: false, formInfo: {} });
  };

  handlerClickSearch = (value) => {
    // console.log("checkvalue", value);
    this.setState({
      valueSearch: value.value,
    });
    // if (value.value !== "") {
    //   const newData = this.state.data.filter((item) =>
    //     item.name
    //       .toString()
    //       .toUpperCase()
    //       .includes(value.value.toString().toUpperCase())
    //   );
    //   console.log(newData);
    //   this.setState({ ...this.setState, data: newData });
    // } else {
    //   console.log(listStudents);
    //   this.setState({ ...this.setState, data: [...listStudents] });
    // }
  };
  handleSort = (sortDir, sortBy) => {
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy,
    });
  };

  handlerClickDetail = (student) => {
    // console.log('Hello', student);
    this.setState({ isToggle: true, formInfo: student, isEdit: true });
  };

  handlerClickEdit = (student) => {
    this.setState({ isToggle: true, formInfo: student, isEdit: true });
  };

  handlerClickDelete = (student) => {
    const newData = this.state.data.filter((item) => {
      return item.id !== student.id;
    });
    this.setState({ ...this.setState, data: newData });
  };

  handleUpdate = (student) => {
    let flag = true;
    console.log(student);

    const newData = this.state.data.map((item) => {
      if (student.id === item.id) {
        flag = false;
        return student;
      } else {
        return item;
      }
    });

    if (flag) {
      let { data } = this.state;
      let newStudent = {
        ...student,
        id: data.length + 1,
      };
      data.push(newStudent);
      this.setState({ ...this.setState, data: data });
    } else {
      this.setState({ ...this.setState, data: newData });
    }
  };

  // check edit

  handleCheckEdit = (status) => {
    this.setState({ isEdit: status });
  };
  handleCheckAdd = (status) => {
    this.setState({ isAdd: status });
  };

  render() {
    let students = [];
    if (this.state.valueSearch !== "") {
      const newData = this.state.data.filter((item) =>
        item.name
          .toString()
          .toUpperCase()
          .includes(this.state.valueSearch.toString().toUpperCase())
      );
      students = [...newData];
    } else {
      students = [...this.state.data];
    }

    if (this.state.sortDir !== "") {
      if (this.state.sortDir === "studentName") {
        if (this.state.sortBy === "ASC") {
          students.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          );
          console.log(students);
        } else {
          students.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          );
          console.log(students);
        }
      } else {
        if (this.state.sortBy === "ASC") {
          students.sort((a, b) => a.age - b.age);
          console.log(students);
        } else {
          students.sort((a, b) => b.age - a.age);
          console.log(students);
        }
      }
    }
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control
              handleToggleOn={this.handleToggleOn}
              handlerClickSearch={this.handlerClickSearch}
              handleSort={this.handleSort}
            />
            <ListStudent
              arrayStudent={students}
              handlerClickDetail={this.handlerClickDetail}
              handlerClickEdit={this.handlerClickEdit}
              handlerClickDelete={this.handlerClickDelete}
              handleCheckEdit={this.handleCheckEdit}
            />
          </div>
        </div>

        {this.state.isToggle ? (
          <Form
            handleToggleOff={this.handleToggleOff}
            student={this.state.formInfo}
            handleUpdate={this.handleUpdate}
            isEdit={this.state.isEdit}
            handleCheckEdit={this.handleCheckEdit}
            isAdd={this.state.isAdd}
          />
        ) : null}
      </div>
    );
  }
}

export default App;