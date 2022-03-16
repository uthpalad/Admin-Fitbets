import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import Back from "../assets/images/add_image1.png";

function SubCategoryList() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get(
      "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllSubCategories"
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
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Equipment</th>
                                <th>Rule</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-1">
                                  <img
                                    src="../../images/faces/face1.jpg"
                                    alt="image"
                                  />
                                </td>
                                <td>Alen newk</td>
                                <td>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>$ 50.99</td>
                                <td>
                                  <div className="row">
                                    <div className="col-6">
                                      <Link to="/edit_sub_category" >
                                      <button class="btn btn-deep-purple">
                                        <i class="fa fa-pencil mr-1"></i> Edit
                                      </button>
                                      </Link>
                                    </div>
                                    <div className="col-6">
                                      <button class="btn btn-deep-purple">
                                      <i class="fas fa-trash-alt"></i> Delete
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
