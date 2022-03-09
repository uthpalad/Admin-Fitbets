import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./user.css"
//import "./style.css";
export default class userDetails extends Component {

  render() {

    return (
      <div className="container">
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
                            src="https://res.cloudinary.com/thilini/image/upload/v1645471635/vfchkidovdycifh43hno.jpg"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                        </div>
                        <h6 className="f-w-600">{/* {username} */}</h6>

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
                            <p
                              className="m-b-10 f-w-500"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              username
                            </p>
                            <h6 className="text-muted f-w-400">
                              {/* {email} */}
                              Thilini
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p
                              className="m-b-10 f-w-500"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Email
                            </p>
                            <h6 className="text-muted f-w-400">
                              thilini@gmail.com
                            </h6>
                          </div>
                          <hr />
                          <div className="col-sm-6">
                            <Link
                              to="/friends"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <p className="m-b-10 f-w-500">friends list</p>
                            </Link>
                            <h6 className="text-muted f-w-400"></h6>
                          </div>
                        </div>
                        <hr />
                        <div className="col-sm-6">
                          <Link
                            to="/idols"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <p className="m-b-10 f-w-500">idol list</p>
                          </Link>
                          <h6 className="text-muted f-w-400"></h6>
                        </div>
                        <hr />
                        <div className="col-sm-6">
                          <Link
                            to="/challenges"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <p className="m-b-10 f-w-500">challenge list</p>
                          </Link>
                          <h6 className="text-muted f-w-400"></h6>
                        </div>
                        <hr />
                        <div className="col-sm-6">
                          <Link
                            to="/posts"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <p className="m-b-10 f-w-500">post list</p>
                          </Link>
                          <h6 className="text-muted f-w-400"></h6>
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

      // <div className="container">
      //   <div className="main-content">
      //     {/* Top navbar */}
      //     <nav
      //       className="navbar navbar-top navbar-expand-md navbar-dark"
      //       id="navbar-main"
      //     >
      //       <div className="container-fluid">
      //         {/* Brand */}
      //         <a
      //           className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
      //           target="_blank"
      //         >
      //           User profile
      //         </a>
      //         {/* Form */}
      //         <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      //           <div className="form-group mb-0">
      //             <div className="input-group input-group-alternative">
      //               <div className="input-group-prepend">
      //                 <span className="input-group-text">
      //                   <i className="fas fa-search" />
      //                 </span>
      //               </div>
      //               <input
      //                 className="form-control"
      //                 placeholder="Search"
      //                 type="text"
      //               />
      //             </div>
      //           </div>
      //         </form>
      //         {/* User */}
      //         <ul className="navbar-nav align-items-center d-none d-md-flex">
      //           <li className="nav-item dropdown">
      //             <a
      //               className="nav-link pr-0"
      //               href="#"
      //               role="button"
      //               data-toggle="dropdown"
      //               aria-haspopup="true"
      //               aria-expanded="false"
      //             >
      //               <div className="media align-items-center">
      //                 <span className="avatar avatar-sm rounded-circle">
      //                   <img
      //                     alt="Image placeholder"
      //                     src="https://res.cloudinary.com/thilini/image/upload/v1645471635/vfchkidovdycifh43hno.jpg"
      //                   />
      //                 </span>
      //                 <div className="media-body ml-2 d-none d-lg-block">
      //                   <span className="mb-0 text-sm  font-weight-bold">
      //                     Thilini
      //                   </span>
      //                 </div>
      //               </div>
      //             </a>
      //             <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
      //               <div className=" dropdown-header noti-title">
      //                 <h6 className="text-overflow m-0">Welcome!</h6>
      //               </div>
      //               <a
      //                 href="../examples/profile.html"
      //                 className="dropdown-item"
      //               >
      //                 <i className="ni ni-single-02" />
      //                 <span>My profile</span>
      //               </a>

      //               <a
      //                 href="../examples/profile.html"
      //                 className="dropdown-item"
      //               >
      //                 <i className="ni ni-calendar-grid-58" />
      //                 <span>Activity</span>
      //               </a>
      //               <a
      //                 href="../examples/profile.html"
      //                 className="dropdown-item"
      //               >
      //                 <i className="ni ni-support-16" />
      //                 <span>Support</span>
      //               </a>
      //               <div className="dropdown-divider" />
      //               <a href="#!" className="dropdown-item">
      //                 <i className="ni ni-user-run" />
      //                 <span>Logout</span>
      //               </a>
      //             </div>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //     {/* Header */}
      //     <div
      //       className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      //       style={{
      //         minHeight: "600px",
      //         backgroundImage:
      //           "url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)",
      //         backgroundSize: "cover",
      //         backgroundPosition: "center top",
      //       }}
      //     >
      //       {/* Mask */}
      //       <span className="mask bg-gradient-default opacity-8" />
      //       {/* Header container */}
      //       <div className="container-fluid d-flex align-items-center">
      //         <div className="row">
      //           <div className="col-lg-7 col-md-10">
      //             <h1 className="display-2 text-white">Thilini</h1>
      //             <p className="text-white mt-0 mb-5"></p>
      //             {/* <a href="#!" className="btn btn-info">
      //               Edit profile
      //             </a> */}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     {/* Page content */}
      //     <div className="container-fluid mt--7">
      //       <div className="row">
      //         <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
      //           <div className="card card-profile shadow">
      //             <div className="row justify-content-center">
      //               <div className="col-lg-3 order-lg-2">
      //                 <div className="card-profile-image">
      //                   <a href="#">
      //                     <img
      //                       src="https://res.cloudinary.com/thilini/image/upload/v1645471635/vfchkidovdycifh43hno.jpg"
      //                       className="rounded-circle"
      //                     />
      //                   </a>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      //               <div className="d-flex justify-content-between"></div>
      //             </div>
      //             <div className="card-body pt-0 pt-md-4">
      //               <div className="row">
      //                 <div className="col">
      //                   <div className="card-profile-stats d-flex justify-content-center mt-md-5">
      //                     <div>
      //                       <span className="heading">22</span>
      //                       <span className="description">Friends</span>
      //                     </div>
      //                     <div>
      //                       <span className="heading">10</span>
      //                       <span className="description">Photos</span>
      //                     </div>
      //                     <div>
      //                       <span className="heading">89</span>
      //                       <span className="description">Comments</span>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div className="text-center">
      //                 <h3>
      //                   Jessica Jones
      //                   <span className="font-weight-light">, 27</span>
      //                 </h3>
      //                 <div className="h5 font-weight-300">
      //                   <i className="ni location_pin mr-2" />
      //                   Bucharest, Romania
      //                 </div>
      //                 <div className="h5 mt-4">
      //                   <i className="ni business_briefcase-24 mr-2" />
      //                   Solution Manager - Creative Tim Officer
      //                 </div>
      //                 <div>
      //                   <i className="ni education_hat mr-2" />
      //                   University of Computer Science
      //                 </div>
      //                 <hr className="my-4" />
      //                 <p>
      //                   Ryan — the name taken by Melbourne-raised,
      //                   Brooklyn-based Nick Murphy — writes, performs and
      //                   records all of his own music.
      //                 </p>
      //                 <a href="#">Show more</a>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-xl-8 order-xl-1">
      //           <div className="card bg-secondary shadow">
      //             <div className="card-header bg-white border-0">
      //               <div className="row align-items-center">
      //                 <div className="col-8">
      //                   <h3 className="mb-0">My account</h3>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="card-body">
      //               <form>
      //                 <h6 className="heading-small text-muted mb-4">
      //                   User information
      //                 </h6>
      //                 <div className="pl-lg-4">
      //                   <div className="row">
      //                     <div className="col-lg-6">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-username"
      //                         >
      //                           Username
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-username"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Username"
      //                           defaultValue="lucky.jesse"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-6">
      //                       <div className="form-group">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-email"
      //                         >
      //                           Email address
      //                         </label>
      //                         <input
      //                           type="email"
      //                           id="input-email"
      //                           className="form-control form-control-alternative"
      //                           placeholder="jesse@example.com"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="row">
      //                     <div className="col-lg-6">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-first-name"
      //                         >
      //                           First name
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-first-name"
      //                           className="form-control form-control-alternative"
      //                           placeholder="First name"
      //                           defaultValue="Lucky"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-6">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-last-name"
      //                         >
      //                           Last name
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-last-name"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Last name"
      //                           defaultValue="Jesse"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <hr className="my-4" />
      //                 {/* Address */}
      //                 <h6 className="heading-small text-muted mb-4">
      //                   Idiols List
      //                 </h6>
      //                 <div className="pl-lg-4">
      //                   <div className="row">
      //                     <div className="col-md-12">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-address"
      //                         >
      //                           Address
      //                         </label>
      //                         <input
      //                           id="input-address"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Home Address"
      //                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
      //                           type="text"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="row">
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-city"
      //                         >
      //                           City
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-city"
      //                           className="form-control form-control-alternative"
      //                           placeholder="City"
      //                           defaultValue="New York"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Country
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-country"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Country"
      //                           defaultValue="United States"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Postal code
      //                         </label>
      //                         <input
      //                           type="number"
      //                           id="input-postal-code"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Postal code"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <h6 className="heading-small text-muted mb-4">
      //                   Friends List
      //                 </h6>
      //                 <div className="pl-lg-4">
      //                   <div className="row">
      //                     <div className="col-md-12">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-address"
      //                         >
      //                           Address
      //                         </label>
      //                         <input
      //                           id="input-address"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Home Address"
      //                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
      //                           type="text"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="row">
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-city"
      //                         >
      //                           City
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-city"
      //                           className="form-control form-control-alternative"
      //                           placeholder="City"
      //                           defaultValue="New York"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Country
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-country"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Country"
      //                           defaultValue="United States"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Postal code
      //                         </label>
      //                         <input
      //                           type="number"
      //                           id="input-postal-code"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Postal code"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <h6 className="heading-small text-muted mb-4">
      //                   Challenge List
      //                 </h6>
      //                 <div className="pl-lg-4">
      //                   <div className="row">
      //                     <div className="col-md-12">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-address"
      //                         >
      //                           Address
      //                         </label>
      //                         <input
      //                           id="input-address"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Home Address"
      //                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
      //                           type="text"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="row">
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-city"
      //                         >
      //                           City
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-city"
      //                           className="form-control form-control-alternative"
      //                           placeholder="City"
      //                           defaultValue="New York"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Country
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-country"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Country"
      //                           defaultValue="United States"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Postal code
      //                         </label>
      //                         <input
      //                           type="number"
      //                           id="input-postal-code"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Postal code"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <h6 className="heading-small text-muted mb-4">
      //                   Post List
      //                 </h6>
      //                 <div className="pl-lg-4">
      //                   <div className="row">
      //                     <div className="col-md-12">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-address"
      //                         >
      //                           Address
      //                         </label>
      //                         <input
      //                           id="input-address"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Home Address"
      //                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
      //                           type="text"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div className="row">
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-city"
      //                         >
      //                           City
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-city"
      //                           className="form-control form-control-alternative"
      //                           placeholder="City"
      //                           defaultValue="New York"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group focused">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Country
      //                         </label>
      //                         <input
      //                           type="text"
      //                           id="input-country"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Country"
      //                           defaultValue="United States"
      //                         />
      //                       </div>
      //                     </div>
      //                     <div className="col-lg-4">
      //                       <div className="form-group">
      //                         <label
      //                           className="form-control-label"
      //                           htmlFor="input-country"
      //                         >
      //                           Postal code
      //                         </label>
      //                         <input
      //                           type="number"
      //                           id="input-postal-code"
      //                           className="form-control form-control-alternative"
      //                           placeholder="Postal code"
      //                         />
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </form>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <footer className="footer">
      //     <div className="row align-items-center justify-content-xl-between">
      //       <div className="col-xl-6 m-auto text-center">
      //         <div className="copyright">
      //           {/* <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Argon Dashboard</a> by Creative Tim</p> */}
      //         </div>
      //       </div>
      //     </div>
      //   </footer>
      // </div>
    );
  }
}
    

