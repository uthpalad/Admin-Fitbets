
import React, { Component } from "react";
import "./friends.css";
import Swal from "sweetalert2";
export default class friends extends Component {
    render() {

        return (
          <div className="container">
            <h3>Friends</h3>
            <table className="table">
              <thead bgcolor="white">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">friendName</th>
                  <th scope="col">friendImage</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>uthpala</td>
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