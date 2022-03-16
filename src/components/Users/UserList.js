import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";

function UserList() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    Axios.get(
      "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/user/get-all-users"
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
        <td>{data.username}</td>
        <td>{data.email_address}</td>

      </tr>
    );
  });

  return (
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
                    <h1 className="card-title">List of All Users </h1>
                    <p className="card-description">
                      Check All User List
                    </p>
                    <br />
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>

                          </tr>
                        </thead>


                        {arr}
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
  );
}

export default UserList;