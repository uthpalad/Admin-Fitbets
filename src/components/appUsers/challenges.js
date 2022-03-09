import React, { Component } from "react";
import "./friends.css";
import Swal from "sweetalert2";
export default class challenges extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <caption></caption>
          <thead bgcolor="goldenrod">
            <tr>
              <th scope="col">challenge id</th>
              <th scope="col">Description</th>
              <th scope="col">Rating count</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td> hello world</td>
              <td> 40</td>
              <td>
                {"                   "}
                <a
                  href="#"
                  //   onClick={() => this.onDelete(emp._id)}
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
