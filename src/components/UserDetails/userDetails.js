import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";
import DashboardMenu from "../DashBoard/dashboard_menu";

import "../UserDetails/userdetails.css";
export default class userDetails extends Component {
  render() {
    return (
      <div className="container-scroller">
        <Dashboard />
        <div className="container-fluid page-body-wrapper">
          <DashboardMenu />
          <div className="container">
            <h2 className="m-b-20 p-b-5 b-b-default f-w-600">
              User Information
            </h2>

            <div className="row">
              <div className="m-b-25">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  className="img-radius"
                  alt="User-Profile-Image"
                />{" "}
              </div>
              <div className="col-sm-6">
                <p
                  className="m-b-10 f-w-500"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  username
                </p>
                <h6 className="text-muted f-w-400">
                  {/* {email} */}
                  John
                </h6>
                <p
                  className="m-b-10 f-w-500"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Email
                </p>
                <h6 className="text-muted f-w-400">john@gmail.com</h6>
              </div>
            </div>
            {/* <div className="col-sm-6">
              <p className="m-b-10 f-w-500">Friend List</p>
            </div>
            <hr />
            <div className="freind-images">
              <div className="row">
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="m-b-10 f-w-500">Idol List</p>
            </div>
            <hr />
            <div className="freind-images">
              <div className="row">
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="m-b-10 f-w-500">Challenge List</p>
            </div>
            <hr />
            <div className="freind-images">
              <div className="row">
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="m-b-10 f-w-500">Post List</p>
            </div>
            <hr />
            <div className="freind-images">
              <div className="row">
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    className="image"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row">
              <h4>Friend List</h4>

              <div className="row__posters">
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <h4>Idol List</h4>

              <div className="row__posters">
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <h4>Post List</h4>

              <div className="row__posters">
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <h4>Challange List</h4>

              <div className="row__posters">
                <div className="contain">
                  <img
                    className={`row__poster && row__posterLarger`}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="User-Profile-Image"
                  />
                  <div className="middle">
                    <div className="text">Delete</div>
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
