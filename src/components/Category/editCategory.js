import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import Back from "../assets/images/add_image1.png";

const  EditCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  const [equipment, setequipment] = useState("");
  const [categoryImageFile, setcategoryImageFile] = useState("");
  const [rules, setrules] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState({
      categoryName: "",
      equipment:"",
      categoryImageFile:"",
      rules:"",
});

  const onChangeFile = (e) => {
    setcategoryImageFile(e.target.files[0]);
  };

  const handleChange = ({ currentTarget: input }) => {
    setCategory({ ...category, [input.name]: input.value });
  };

  const updateCategoryData = async (e) => {
    e.preventDefault();

    console.log(category);
   
    axios
    .patch(
      `http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllSubCategories
      /${localStorage.getItem(
        "categoryId"
      )}`,
      category
    )
    .then((res) => console.log())
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

const getCategoryData = (categoryId) => {
  axios
    .get("http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/getAllCategories" + categoryId)
    .then((res) => {
      const categoryDetails = res.data.category;
      setCategory({
        ...category,
        categoryName: categoryDetails.categoryName,
        equipment: categoryDetails.equipment,
        categoryImageFile: categoryDetails.categoryImageFile,
        rules: categoryDetails.rules,
      });
    })
    .catch((error) => console.log(error.message));
};

useEffect(() => {
  getCategoryData(localStorage.getItem("categoryId"));
}, []);


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
                        <h1 className="card-title">Edit Category Details</h1>
                        <p className="card-description">
                          Now You can edit Category Details
                        </p>
                        <br />
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">
                              Category Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={category.categoryName}
                              onChange={handleChange}
                              id="exampleInputName1"
                              placeholder="Category Name"
                            />
                          </div>

                          <div className="form-group">
                            <label>Category Images</label>
                            <input
                              type="file"
                              name="image"
                              accept="image/*"
                              onChange={this.onFileChange}
                              className="form-control form-control-user"
                              required
                            />
                          </div>
                          <div className="col-12 p-0 ">
                            <img
                              src={this.state.previewImage}
                              alt="Category Image"
                              style={{ height: 400, width: "50%" }}
                            />
                          </div>
                          <br />

                          <div className="form-group">
                            <label htmlFor="exampleInputEmail3">
                              Equipment
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="equipment"
                              value={category.equipment}
                              onChange={handleChange}
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
                                value={category.rules}
                                onChange={handleChange}
                                placeholder="rules"
                              />
                            </div>
                          <button
                            type="submit"
                            className="btn btn-primary mr-2"
                          >
                           Save
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

export default EditCategory;
