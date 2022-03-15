/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./datatable.scss";
import "../assets/category.scss";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./userlistSource";
import Dashboard from "../DashBoard/dashboard";
import DashboardMenu from "../DashBoard/dashboard_menu";

const Datatable = () => {
  useEffect(() => {
    getItems();
  }, []);

  const [userDetail, setuserDetail] = useState([]);
  // const [deleteUserId, setdeleteUserId] = useState([]);

  const getItems = () => {
    axios
      .get(
        `http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/user/get-all-users`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjUxOSwidXNlcm5hbWUiOiJkdWxhbl9TIiwiZ2VuZGVyIjoibWFsZSIsImJpcnRoZGF5IjoiMTk5OS0wNS0yNSIsImVtYWlsX2FkZHJlc3MiOiJkdWxhbi5TQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIrOTQ3MTIzNDU2Nzg5IiwiaXNfYWN0aXZlIjp0cnVlfSwiaWF0IjoxNjQ3MDA5ODQwNDMzLCJleHAiOjE2NDcwMTEwNTAwMzN9.IIXXf1jWlIqfZryI1HskYtCgIZm0aQ4wAfSWvvyfzbYnUo5v-h2OaUvrvtHGjEDE4DpwJiSrxanwO7lE__WdZsO-bL6huoRlFOZ2rqMcrItGRiVVmcW3R9CUeSyzGvbJiSR7X2tACEriEly3vltcLEQniShTMMjz9OYc7JMZhWnX3fXZaEO3OuMwmdHJSrtjzjvKOPQX0xY1IgOFDn2-DIeYUdWYUbH-Nf9h1wzas5BrXg3TkGd_AMcNhDhD0xlK9xckAKd2VDFS3ObE9CSzSXpTQ4Ie5H91v6p7y_ChDkaLG3SiImuc026bCHMm0jIJQWkp_l4QPByPcur0NwBhFai3bT-UpI5Qbb7QNAX2bUIhunK5rhQX0HQx-r8FzQ7c1FuUGk4z2kmvb4gom3f_ZrAQoR5YtCznTn0olUJ7YjqtdC1JJUkH-sl7hcE7GbBRrm-8BjkjeaN1iKaMXNAqnjHRse7THgII5kOun6le2uo5QzreWUUXAp1fKL-aakbKZA7txReJ__i2YRuo_1zknMZ6fXR0sm31dG7N3SPzXeJJ4mmReiykbA5-xDxRs0t5qsAU9L-arv94bLDaHe-wbpFqA_R7zqL6j2yQzyEql3iL2FEEfff1d-exmwDjhCDTuC143FUANODhLF8lDYtxOCpNxL8dyYS8HJdmc6ywYlw`,
          },
        }
      )
      .then(res => {
        if (
          res.data.status == 200 &&
          res.data.message == "All Users List Received" &&
          res.data.length != 0
        ) {
          console.log(res.data);
          console.log(res.data.length);
          const users = res.data.data;
          setuserDetail(users);
        } else {
          return;
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // const deleteItems = oldData => {
  //   axios
  //     .delete(`delete url/${oldData.id}`, {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjUxOSwidXNlcm5hbWUiOiJkdWxhbl9TIiwiZ2VuZGVyIjoibWFsZSIsImJpcnRoZGF5IjoiMTk5OS0wNS0yNSIsImVtYWlsX2FkZHJlc3MiOiJkdWxhbi5TQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIrOTQ3MTIzNDU2Nzg5IiwiaXNfYWN0aXZlIjp0cnVlfSwiaWF0IjoxNjQ3MDA5ODQwNDMzLCJleHAiOjE2NDcwMTEwNTAwMzN9.IIXXf1jWlIqfZryI1HskYtCgIZm0aQ4wAfSWvvyfzbYnUo5v-h2OaUvrvtHGjEDE4DpwJiSrxanwO7lE__WdZsO-bL6huoRlFOZ2rqMcrItGRiVVmcW3R9CUeSyzGvbJiSR7X2tACEriEly3vltcLEQniShTMMjz9OYc7JMZhWnX3fXZaEO3OuMwmdHJSrtjzjvKOPQX0xY1IgOFDn2-DIeYUdWYUbH-Nf9h1wzas5BrXg3TkGd_AMcNhDhD0xlK9xckAKd2VDFS3ObE9CSzSXpTQ4Ie5H91v6p7y_ChDkaLG3SiImuc026bCHMm0jIJQWkp_l4QPByPcur0NwBhFai3bT-UpI5Qbb7QNAX2bUIhunK5rhQX0HQx-r8FzQ7c1FuUGk4z2kmvb4gom3f_ZrAQoR5YtCznTn0olUJ7YjqtdC1JJUkH-sl7hcE7GbBRrm-8BjkjeaN1iKaMXNAqnjHRse7THgII5kOun6le2uo5QzreWUUXAp1fKL-aakbKZA7txReJ__i2YRuo_1zknMZ6fXR0sm31dG7N3SPzXeJJ4mmReiykbA5-xDxRs0t5qsAU9L-arv94bLDaHe-wbpFqA_R7zqL6j2yQzyEql3iL2FEEfff1d-exmwDjhCDTuC143FUANODhLF8lDYtxOCpNxL8dyYS8HJdmc6ywYlw`,
  //       },
  //     })
  //     .then(res => {
  //       // console.log(res.data);
  //       // console.log(res.data.length);
  //       // const users = res.data.data;
  //       // setuserDetail(users);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "View profile",
      width: 100,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div className="deleteButton">Delete</div> */}
          </div>
        );
      },
    },
  ];
  const actionColumn2 = [
    {
      field: "action2",
      headerName: "Delete user",
      width: 100,
      renderCell: () => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="container-scroller">
        <Dashboard />
        <div className="container-fluid page-body-wrapper">
          <DashboardMenu />
          {/*right side bar content*/}
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close ti-close" />
            <ul
              className="nav nav-tabs border-top"
              id="setting-panel"
              role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="todo-tab"
                  data-toggle="tab"
                  href="#todo-section"
                  role="tab"
                  aria-controls="todo-section"
                  aria-expanded="true">
                  TO DO LIST
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="chats-tab"
                  data-toggle="tab"
                  href="#chats-section"
                  role="tab"
                  aria-controls="chats-section">
                  CHATS
                </a>
              </li>
            </ul>
            <div className="tab-content" id="setting-content">
              <div
                className="tab-pane fade show active scroll-wrapper"
                id="todo-section"
                role="tabpanel"
                aria-labelledby="todo-section">
                <div className="add-items d-flex px-3 mb-0">
                  <form className="form w-100">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control todo-list-input"
                        placeholder="Add To-do"
                      />
                      <button
                        type="submit"
                        className="add btn btn-primary todo-list-add-btn"
                        id="add-task">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
                <div className="list-wrapper px-3">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Prepare for presentation
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="checkbox"
                            type="checkbox"
                            defaultChecked
                          />
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="checkbox"
                            type="checkbox"
                            defaultChecked
                          />
                          Project review
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                  </ul>
                </div>
                <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">
                  Events
                </h4>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary mr-2" />
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">
                    Creating component page build a js
                  </p>
                  <p className="text-gray mb-0">The total number of sessions</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary mr-2" />
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">
                    Meeting with Alisa
                  </p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              {/* To do section tab ends */}
              <div
                className="tab-pane fade"
                id="chats-section"
                role="tabpanel"
                aria-labelledby="chats-section">
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                    Friends
                  </p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                    See All
                  </small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile">
                      <img src="../../images/faces/face1.jpg" alt="image" />
                      <span className="online" />
                    </div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="../../images/faces/face2.jpg" alt="image" />
                      <span className="offline" />
                    </div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">
                      4
                    </div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="../../images/faces/face3.jpg" alt="image" />
                      <span className="online" />
                    </div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="../../images/faces/face4.jpg" alt="image" />
                      <span className="offline" />
                    </div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="../../images/faces/face5.jpg" alt="image" />
                      <span className="online" />
                    </div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="../../images/faces/face6.jpg" alt="image" />
                      <span className="online" />
                    </div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
              {/* chat tab ends */}
            </div>
          </div>
          {/*card content*/}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      {/*table content*/}
                      <div className="datatable">
                        <div className="datatableTitle">
                          User Details
                          <div className="datatableList">
                            <div className="search">
                              <input type="text" placeholder="Search..." />
                              <SearchOutlinedIcon />
                            </div>
                            <Link to="/users/new" className="link">
                              Add New
                            </Link>
                          </div>
                        </div>
                        <DataGrid
                          rows={userDetail} //userDetail
                          columns={userColumns.concat(
                            actionColumn,
                            actionColumn2
                          )}
                          pageSize={9}
                          rowsPerPageOptions={[8]}
                          checkboxSelection
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datatable;
