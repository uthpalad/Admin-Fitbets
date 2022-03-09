import React from "react";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "../Subcategory/SubCategoryList.css";

function SubCategoryList() {
  return (
    <div className="CategoryList">
      <div className="container">
        <Link to="/subcategory">
          <button className="add_button">
            <a>Add Sub-Category </a>
          </button>
        </Link>
        <div
          class="input-group rounded"
          style={{ marginLeft: "80px", width: "1000px" }}
        >
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search SubCategory"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <br />

        <table className="table">
          <thead bgcolor="white">
            <tr>
              <th scope="col">SubCategory No</th>
              <th scope="col">SubCategory Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </td>
              <td>
                <p>Basketball</p>
                <p>Cricket</p>
                <p>Netball</p>
              </td>
              <td>
                <div>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-edit"></i>
                    Edit
                  </a>{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Delete
                  </a>
                </div>
                <br />
                <div>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-edit"></i>
                    Edit
                  </a>{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Delete
                  </a>
                </div>
                <br />

                <div>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-edit"></i>
                    Edit
                  </a>{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubCategoryList;
