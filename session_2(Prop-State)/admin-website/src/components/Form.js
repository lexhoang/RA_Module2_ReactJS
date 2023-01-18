import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      code: "",
      name: "",
      age: "",
      gender: "",
      birthday: "",
      country: "",
      address: "",
    };
  }
  componentDidUpdate() {
    // console.log("check state", this.state);
    // console.log("check props", this.props.student);
    console.log("check edit", this.props.isEdit);
    const isEdit = this.props.isEdit;
    if (isEdit) {
      this.props.handleCheckEdit(false);
      this.setState({
        ...this.props.student,
      });
    }
    console.log("check edit", this.props.isEdit);

    // console.log("check add", this.props.isAdd);

    // const isAdd = this.props.isAdd;
    // if (isAdd) {
    //   const data = {};
    //   this.props.handleCheckAdd(false);
    //   this.setState({
    //     ...data,
    //   });
    // }
  }

  handleOnChange() { }
  handlerClickSubmit(value, e) {
    e.preventDefault();
    this.props.handleUpdate(value);
    this.props.handleToggleOff();
  }

  render() {
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-11">
                <h3 className="card-title">Thông tin sinh viên</h3>
              </div>

              <div className="col-1">
                <i
                  className="fa-solid fa-circle-xmark me-2"
                  style={{ fontSize: "24px" }}
                  onClick={() => this.props.handleToggleOff(true)}
                ></i>
              </div>
            </div>
            <form onSubmit={(e) => this.handlerClickSubmit(this.state, e)}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({ ...this.state, code: e.target.value })
                    }
                    value={this.state.code}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({ ...this.state, name: e.target.value })
                    }
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({ ...this.state, age: e.target.value })
                    }
                    value={this.state.age}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-select"
                    onChange={(e) =>
                      this.setState({ ...this.state, gender: e.target.value })
                    }
                    value={this.state.gender}
                  >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    onChange={(e) =>
                      this.setState({ ...this.state, birthday: e.target.value })
                    }
                    value={this.state.birthday}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-select"
                    onChange={(e) =>
                      this.setState({ ...this.state, country: e.target.value })
                    }
                    value={this.state.country}
                  >
                    <option value="Việt Nam">Việt Nam</option>
                    <option value="USA">USA</option>
                    <option value="AUS">AUS</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    onChange={(e) =>
                      this.setState({ ...this.state, address: e.target.value })
                    }
                    value={this.state.address}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;