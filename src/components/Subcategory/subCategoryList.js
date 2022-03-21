import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import AsyncSelect from "react-select/async";

function SubCategoryList() {

  const [categories, setcategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryName, setsubcategoryName] = useState("");
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/getAllsubCategories")

      .then((res) => {
        setcategories(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

 const arr = categories.map((data, index) => {
   return (
     <tr>
       <td>{data.id}</td>
       <td>{data.categoryId}</td>
       <td>{data.subcategoryName}</td>
       <td>
         <img src={data.subcategoryImageFile} width="50px" height="50px"></img>
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
                      {/* <div>
                        Selected value:
                        {JSON.stringify(selectedValue || {}, null, 2)}
                      </div> */}

                      {/* <AsyncSelect
                        cacheOptions
                        defaultOptions
                        value={selectedValue}
                        getOptionalLabel={(e) => e.subcategoryName
                           
                        }
                        getOptionalValue={(e) => e.id}
                        loadOptions={fetchData}
                        onInputChange={handleInputChange}
                        onChange={handleChange}
                      /> */}
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">Sub Category</label>
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
                              {category.subcategoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Subcategory Id</th>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>Subcategory Image</th>
                          </tr>
                        </thead>
                        <tbody>{arr}</tbody>
                      </table>
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
