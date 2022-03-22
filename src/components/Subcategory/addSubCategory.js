import React, { useState, useEffect } from "react";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import axios from "axios";

const NewSubCategory = () => {
  const [categories, setcategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryImageFile, setsubcategoryImageFile] = useState("");
  const [subcategoryName, setsubcategoryName] = useState("");
  const [challenges, setchallenges] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllCategories"
      )

      .then((res) => {
        // console.log("Getting from:", res.data.data[0].id);
        setcategories(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const onChangeFile = (e) => {
    setsubcategoryImageFile(e.target.files[0]);
    console.log(categoryId);

  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("categoryId", categoryId);
    formData.append("subcategoryImageFile", subcategoryImageFile);
    formData.append("subcategoryName", subcategoryName);
    formData.append("challenges", challenges);

    setCategoryId("");
    setsubcategoryImageFile("");
    setsubcategoryName("");
    setchallenges("");

    axios
      .post(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/addSubCategoryToAdminPanel",
        formData
      )
      .then((res) => res.data.success)
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        } else {
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
                      <h1 className="card-title">New Sub Category Details</h1>
                      <p className="card-description">
                        Now You can add new Sub Category Details
                      </p>
                      <br />
                      <form action="" method="post" onSubmit={changeOnClick}>
                        <div class="form-group">
                          <label for="exampleSelectGender">Category Id</label>
                          <select
                            class="form-control"
                            id="exampleSelectGender"
                            name="categoryId"
                            // value={selectedValue}
                            onChange={(e) => setCategoryId(e.target.value)}
                          >
                            {categories.map(function (category, i) {
                              // console.log(category.id);
                              return (
                                <option key={i} value={category.id}>
                                  {category.id}{" "}
                                  {category.categoryName}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Select Category Image</label>
                          <input
                            type="file"
                            placeholder="Upload your image"
                            filename="subcategoryImageFile"
                            onChange={onChangeFile}
                            required
                            className="form-control form-control-user"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label htmlFor="subcategoryName">
                            Subcategory Name
                          </label>
                          <input
                            type="text"
                            name="subcategoryName"
                            className="form-control"
                            id="subcategoryName"
                            value={subcategoryName}
                            onChange={(e) => setsubcategoryName(e.target.value)}
                            placeholder="subcategoryName"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="challenges">Challenges</label>
                          <input
                            type="text"
                            name="challenges"
                            className="form-control"
                            id="challenges"
                            value={challenges}
                            onChange={(e) => setchallenges(e.target.value)}
                            placeholder="Challenges"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary mr-2">
                          Submit
                        </button>
                      
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
};
export default NewSubCategory;
