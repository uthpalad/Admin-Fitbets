import React from 'react';
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom';
import "./CategoryList.css";

function CategoryList() {
  return (
    <div className="CategoryList">
      
      <div className="PlusButton" >
        <Link to="/category">
        <button style={{backgroundColor:"white"}}>
        <img src= "https://e7.pngegg.com/pngimages/272/936/png-clipart-computer-icons-desktop-plus-and-minus-signs-restart-miscellaneous-sign.png" 
        style={{ height: "20px", width: "20px"}}/> 
        
          <a>Add Category </a>
          </button>
          {/* <IoIcons.IoIosAdd /> */}
        </Link>
      </div>
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
            placeholder="Search Category"
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
              <th scope="col">Category No</th>
              <th scope="col">Category Name</th>
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
                <p>Sports</p>
                <p>Fasion</p>
                <p>Entertaintment</p>
              </td>

              <td>
                <div>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-edit"></i> Edit
                </a>
                {" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-trash-alt"></i> Delete
                </a>
                </div>
                <br />

                <div>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-edit"></i> Edit
                </a>
                {" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-trash-alt"></i> Delete
                </a>
                </div>

                <br />
                <div>
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-edit"></i> Edit
                </a>
                {" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "black" }}>
                  <i className="fas fa-trash-alt"></i> Delete
                </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default CategoryList