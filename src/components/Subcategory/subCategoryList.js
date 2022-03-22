import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import Select from 'react-select';
import AsyncSelect from "react-select/async";

function SubCategoryList() {
  const [SubCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllSubCategories"
      )

      .then((res) => {
        // console.log("Getting from:", res.data.data[0].id);
        //console.log(res.data.data)
        setSubCategories(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const getAllSubCategories = (id) => {
    // console.log(data);

    axios
      .get(
        `http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllSubCategories/${id}`
      )
      .then((res) => {
        console.log(res.data.data);
        // console.log("Getting from:", res.data.data[0].id);
        if (res.data.data.length === 0) {
          setSubCategory([]);
        } else {
          setSubCategory(res.data.data);
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-scroller">
        <Dashboard />

        <div className="container-fluid page-body-wrapper">
          <DashboardMenu />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title">List of All SubCateogry </h1>
                      <p className="card-description">
                        Check All Sub Category List
                      </p>
                      <br />

                      <select
                        class="form-control"
                        id="exampleSelectGender"
                        name="id"
                        value={SubCategories.id}
                        onChange={(e) => getAllSubCategories(e.target.value)}
                      >
                        <option value="0">Select Sub Category</option>
                        {SubCategories.map(function (subCategory, i) {
                          // console.log(category.id);
                          return (
                            <option key={i} value={subCategory.id}>
                              {subCategory.id}
                              {"-"}
                              {subCategory.subcategoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Subcategory Id</th>
                            <th>categoryId</th>
                            <th>subcategoryName</th>
                            <th>Image</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subCategory.map(function (subCategory, i) {
                            console.log(subCategory.id);
                            return (
                              <tr>
                                <td>{subCategory.id}</td>
                                <td>{subCategory.categoryId}</td>
                                <td>{subCategory.subcategoryName}</td>
                                <img
                                  src={subCategory.subcategoryImageFile}
                                  width="50px"
                                  height="50px"
                                ></img>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategoryList;
