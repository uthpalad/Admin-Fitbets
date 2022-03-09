import React, { Component } from "react";
import axios from "axios";
import "./userProfile.css";
import Sidebar from "./Sidebar/Sidebar";

import { Link } from "react-router-dom";
import "./user.css";
export default class userDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: {},
    };
  }

  // componentDidMount() {
  //   this.retrieveEmployees();
  // }

  // retrieveEmployees() {
  //   const id = this.props.match.params.id;
  //   axios
  //     .get(`http://localhost:9000/employee/getEmployee/${id}`)
  //     .then((res) => {
  //       if (res.data.success) {
  //         this.setState({
  //           emp: res.data.emp,
  //         });
  //       }
  //     });
  // }

  render() {
    // const { username, email,image} =
    //   this.state.emp;
    return (
      <div>
        <Sidebar />
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          {" "}
                          <img
                            src={image}
                            className="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                        </div>
                        <h6 className="f-w-600">
                          {fname} {""} {lname}
                        </h6>
                        <p>{contactNumber}</p>{" "}
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          User Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-500">Email</p>
                            <h6 className="text-muted f-w-400">{email}</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-500">Address</p>
                            <h6 className="text-muted f-w-400">{address}</h6>
                          </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-500"></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
