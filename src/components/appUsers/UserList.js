import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userList.css";
import Swal from "sweetalert2";

export default class UserList extends Component {
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
