import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";

function CategoryList() {
    const [data, setDate] = useState([]);
  
    useEffect(() => {
      Axios.get(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllCategories"
      )
  
        .then((res) => {
          console.log("Getting from:", res.data);
          setDate(res.data.data);
        })
  
        .catch((err) => console.log(err));
    }, []);
  
    const arr = data.map((data, index) => {
      return (
        <tr>
          <td>{data.id}</td>
          <td>{data.categoryName}</td>
          <td>{data.equipment}</td>
          <td>
            <img src={data.categoryImageFile} width="50px" height="50px"></img>
          </td>
        </tr>
      );
    });
  
    return (
      <div className="container-scroller">
        <Dashboard />
        <div className="container-fluid page-body-wrapper">
          <DashboardMenu />
          <div className="App">
            <h1>Category List</h1>
            <table>
              <tr>
                <th>Id</th>
                <th>Category Name</th>
                <th>Equipment</th>
                <th>Image</th>
              </tr>
              {arr}
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default CategoryList;