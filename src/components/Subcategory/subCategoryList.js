import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import AsyncSelect from "react-select/async";

function SubCategoryList() {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  async function fetchData() {
    const response = await axios.get(
      "http://localhost:8000/admin/getAllsubCategories"
    );
  console.log(response.data.data);
    return response.data.data;
  }

  //   const DisplayData=selectedValue.map(
  //       (info)=>{
  //           return(
  //               <tr>
  //                   <td>{info.id}</td>
  //                   <td>{info.categoryId}</td>
  //                   <td>{info.subcategoryName}</td>
  //               </tr>
  //           )
  //       }
  // )

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

                      <div>
                        Selected value:
                        {JSON.stringify(selectedValue || {}, null, 2)}
                      </div>

                      <AsyncSelect
                        cacheOptions
                        defaultOptions
                        value={selectedValue}
                        getOptionalLabel={(e) => e.subcategoryName
                           
                        }
                        getOptionalValue={(e) => e.id}
                        loadOptions={fetchData}
                        onInputChange={handleInputChange}
                        onChange={handleChange}
                      />

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
                        <tbody>{/* {DisplayData} */}</tbody>
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
