import React, { useState, useEffect } from "react";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import axios from "axios";

const  NewCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  const [equipment, setequipment] = useState("");
  const [categoryImageFile, setcategoryImageFile] = useState("");
  const [rules, setrules] = useState("");
  const [error, setError] = useState("");

 
  const onChangeFile = (e) => {
    setcategoryImageFile(e.target.files[0]);
  };


  const changeOnClick = (e) => {
    e.preventDefault();
     
       const formData = new FormData();

       formData.append("categoryName", categoryName);
       formData.append("equipment", equipment);
       formData.append("categoryImageFile", categoryImageFile);
       formData.append("rules", rules);

       setcategoryName("");
       setequipment("");
       setcategoryImageFile("");
       setrules("");
  
        axios
          .post("http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/addCategoryToAdminPanel", formData)
          .then((res) => res.data.success)
          .catch((error) => {
           if (
             error.response &&
             error.response.status >= 400 &&
             error.response.status <= 500
           ) {
            setError(error.response.data.message);
           }  else {
             console.log(error);
           }
          });
 
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
                    <div className="col-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h1 className="card-title">New Category Details</h1>
                          <p className="card-description">
                            Now You can add new Category Details
                          </p>
                          <br />
                          <form action="" method="post" onSubmit={changeOnClick}>
                            <div className="form-group">
                              <label htmlFor="exampleInputName1">
                                Category Name
                              </label>
                              <input
                                type="text"
                                name="categoryName"
                                className="form-control"
                                id="categoryName"
                                value={categoryName}
                                onChange={(e) => setcategoryName(e.target.value)}
                                placeholder="Category Name"
                              />
                            </div>
  
                            <div className="form-group">
                              <label>Category Images</label>
                                <input
                                type="file"
                                placeholder="Upload your image"
                                filename="categoryImageFile"
                                onChange={onChangeFile}
                                required
                                className="form-control form-control-user"
                           
                              />
                            </div>
                            {/* <div className="col-12 p-0 ">
                              <img
                                src={NewCategory.previewImage}
                                alt="Category Image"
                                style={{ height: 400, width: "50%" }}
                              />
                            </div> */}
                            <br />
  
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail3">
                                Equipment
                              </label>
                              <input
                                type="text"
                                name="equipment"
                                className="form-control"
                                id="equipment"
                                value={equipment}
                                onChange={(e) => setequipment(e.target.value)}
                                placeholder="Equipment"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInputEmail4">
                               Rules
                              </label>
                              <input
                                type="text"
                                name="rules"
                                className="form-control"
                                id="rules"
                                value={rules}
                                onChange={(e) => setrules(e.target.value)}                                placeholder="rules"
                              />
                            </div>
  
                            <button
                              type="submit"
                              className="btn btn-primary mr-2"
                            >
                              Submit
                            </button>
                            <button className="btn btn-light">Cancel</button>
                          </form>
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
  export default NewCategory;