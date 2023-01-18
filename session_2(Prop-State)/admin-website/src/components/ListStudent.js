import React, { Component } from "react";

class ListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
  }

  render() {
    // let { arrayStudent } = this.props;
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Stt</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.arrayStudent.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element.code}</td>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                    <td>{element.gender === true ? "Nam" : "Nữ"} </td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                          onClick={() => {
                            this.props.handlerClickDetail(element);
                            this.props.handleCheckEdit(true);
                          }}
                        >
                          Xem
                        </button>

                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                          onClick={() => {
                            this.props.handlerClickDetail(element);
                            this.props.handleCheckEdit(true);
                          }}
                        >
                          Sửa
                        </button>

                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                          onClick={() => this.props.handlerClickDelete(element)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;