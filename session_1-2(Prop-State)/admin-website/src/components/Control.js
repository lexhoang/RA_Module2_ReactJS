import React, { Component } from "react";
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  // handleOnChange(event) {
  //   let name = event.target.name;
  //   let valueInput = event.target.value;
  //   this.setState({
  //     value: valueInput,
  //   });
  // }

  handlerClickSearch(value, e) {
    // console.log("111", value);
    e.preventDefault();
    this.props.handlerClickSearch(value);
  }
  handleSort = (event) => {
    let value = event.target.value;
    let arraySort = value.split("-");
    this.props.handleSort(arraySort[0], arraySort[1]);
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={() => {
                this.props.handleToggleOn(true);
                this.props.handleCheckAdd(true);
              }}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search"></i>
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                name="search"
                onChange={(e) =>
                  this.setState({ ...this.state, value: e.target.value })
                }
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={(e) => this.handlerClickSearch(this.state, e)}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-select" onChange={this.handleSort}>
              <option value="">Sắp xếp </option>
              <option value="studentName-ASC">xếp tên theo ABC </option>
              <option value="studentName-DESC">xếp tên theo CBA</option>
              <option value="age-ASC">xếp tuổi tăng dần</option>
              <option value="age-DESC">xếp tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Control;