import React, { useState, useEffect } from "react";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import axios from "axios";

const NewObjective = () => {
  const [objectiveData, setObjectiveData] = useState({
    sub_category_id: "",
    objective_name: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      "sent data = " + objectiveData.objective_name,
      objectiveData.sub_category_id
    );
    axios
      .post(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/objective/create",
        objectiveData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEzLCJhZG1pbl9uYW1lIjoic2FnYXJhaCIsImVtYWlsX2FkZHJlc3MiOiJzYWdhcmFoQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIwNzc4OTg5NTk4Iiwic3RhdHVzIjoiQURNSU4ifSwiaWF0IjoxNjQ3NDIwNjAyMzQ2LCJleHAiOjE2NDc0MjE4MTE5NDZ9.huDeLFH61HQSeFP_K_E2Co8h7JMNG57Hm8kRGUllnoaRw4yCjSdOl5Q9NaE58hIYNruRdwQz-tHf0UhzQzMT_-wSleXs2JhOmXJTIfWqwl9g8-qPQBcxUpUYyaHxBEYj8dtK4x-fJkUeBmPwuFcLa3ZBb7u8MV2F-NoTADtvZoEwEo-VeJ-T5ZCwx5Bgx20cvZAnSagPgu8ZOZcDMKDAMq_TnB-DtuILSS6Z8VJSeHqMhJ5aqYlXEf8RhyfT_B6vg_6lowqM5c-qlKpWljAqWNyWqxFx81Cca7cDQjVVraaSX8GNQQsOp5llhG3TAEyZ77uO8H30SFTmkbAG5ytUH2_iuftp-rPfeIgzvfxDEYaYMNgLGgHu3iVoO-L0zdUDaeMQYS-soK9EO3GepNWwka_IxqV_1bzrbc2Vha_xyVPOeHAhR1Y-18LcppfrnnBVszdlk2OthJs5Y244k3LtzvRemmMIhND7SgSxqe1CYaBZHWP_K7ezqmfOqxgozxBrLErfEzA08YT1x4_XE75AZHxGXoFk1kbc_rNRvJAneVb5DlcINgP9oB2uxAjiVhScgJqgVVLEN0dTz9J5aY-0gt75TDZp9XObAslLGKDXDf0vzHytUWdIs8ZjAwegCfUVn8WbkQQLemmjtD9mn6gJkrMndTe7p0lXrjyMXsStBIo`,
          },
        }
      )
      .then((res) => {
        setObjectiveData({ sub_category_id: "", objective_name: "" });
        console.log(res);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObjectiveData({ ...objectiveData, [name]: value });
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
                      <h1 className="card-title">New Objective</h1>
                      <p className="card-description">
                        Now You can add new Objective Details
                      </p>
                      <br />
                      <form action="" method="post" onSubmit={onSubmit}>
                        <div className="form-group">
                          <label htmlFor="sub_category_id">
                            sub Category ID
                          </label>
                          <input
                            type="number"
                            name="sub_category_id"
                            className="form-control"
                            id="sub_category_id"
                            value={objectiveData.sub_category_id}
                            onChange={handleChange}
                            placeholder="sub Category ID"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label htmlFor="objective_name">Objective Name</label>
                          <input
                            type="text"
                            name="objective_name"
                            className="form-control"
                            id="objective_name"
                            value={objectiveData.objective_name}
                            onChange={handleChange}
                            placeholder="Objective Name"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary mr-2">
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
};
export default NewObjective;
