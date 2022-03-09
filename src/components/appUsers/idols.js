import React, { Component } from "react";
import "./friends.css";
export default class idols extends Component {
  render() {
    return (
      <div className="container">
        <h3>Idols</h3>
        <table className="table">
          <thead bgcolor="white">
            <tr>
              <th scope="col"></th>
              <th scope="col">Idol Name</th>
              <th scope="col">Idol Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Thilini</td>
              <td> Image</td>
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
