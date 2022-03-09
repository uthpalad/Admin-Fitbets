import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";

export default class AddUserList extends Component {
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
          <thead bgcolor="white">
            <tr>
              <th scope="col"></th>
              <th scope="col">First Name</th>
              <th scope="col"> Last Name</th>
              <th scope="col"> Profile Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <Link
                  to="/userDetails/:id"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Thilini
                </Link>
              </td>
              <td>Abesekara</td>

              <td>
                <img src={""} width="50px" />{" "}
              </td>
              <td>
                <a style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-edit"></i> Edit
                </a>
                {"                   "}
                <a
                  href="#"
                  // onClick={() => this.onDelete(emp._id)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}