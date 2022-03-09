import React, { Component } from "react";
import axios from "axios";
import "./userList.css";
import Sidebar from "./Sidebar/Sidebar";
import Swal from "sweetalert2";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee: [],
    };
  }

  componentDidMount() {
    this.retrieveEmployees();
  }

  retrieveEmployees() {
    axios.get("http://localhost:9000/employee/allEmployees").then((res) => {
      if (res.data.success) {
        this.setState({
          Employee: res.data.Employees,
        });
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`http://localhost:9000/employee/deleteEmployee/${id}`)
      .then((res) => {
        // alert("Deleted Sucessfully");
        Swal.fire({
          position: "top",
          icon: "success",
          title: "sucessfully deleted !!!",
          confirmButtonColor: "#3bb19b",
          timer: 1500,
        });
        this.retrieveEmployees();
      });
  };

  filterData(Employee, searchKey) {
    const result = Employee.filter(
      (emp) =>
        emp.fname.toLowerCase().includes(searchKey) ||
        emp.lname.toLowerCase().includes(searchKey) ||
        emp.contactNumber.toLowerCase().includes(searchKey)
    );
    this.setState({ Employee: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:9000/employee/allEmployees").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.Employees, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div className="container">
          <br />
          <br />

          <div
            class="input-group rounded"
            style={{ marginLeft: "80px", width: "1000px" }}
          >
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search Employee"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={this.handleSearchArea}
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <br />

          <table className="table">
            <thead bgcolor="goldenrod">
              <tr>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col"> Last Name</th>
                <th scope="col"> Profile Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Employee.map((emp, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/employee/${emp._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                     
                        {emp.fname}
                      </a>
                    </td>
                    <td>{emp.lname}</td>

                    <td>
                      <img src={emp.image} width="50px" />{" "}
                    </td>
                    <td>
                      <a
                        href={`/editProfile/${emp._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fas fa-edit"></i> Edit
                      </a>
                      {"                   "}
                      <a
                        href="#"
                        onClick={() => this.onDelete(emp._id)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i className="fas fa-trash-alt"></i> Delete
                      </a>
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
