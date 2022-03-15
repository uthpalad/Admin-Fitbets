/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./datatable.scss";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./userlistSource";

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
            <div className="deleteButton" >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
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
        columns={userColumns.concat(actionColumn, actionColumn2)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
