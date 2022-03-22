import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";

function ObjectiveList() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [Objective, SetObjective] = useState({
    category_id: "",
    sub_category_id: "",
    objective_name: "",
  });
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/objective/getAllObjectives",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEzLCJhZG1pbl9uYW1lIjoic2FnYXJhaCIsImVtYWlsX2FkZHJlc3MiOiJzYWdhcmFoQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIwNzc4OTg5NTk4Iiwic3RhdHVzIjoiQURNSU4ifSwiaWF0IjoxNjQ3NDIwNjAyMzQ2LCJleHAiOjE2NDc0MjE4MTE5NDZ9.huDeLFH61HQSeFP_K_E2Co8h7JMNG57Hm8kRGUllnoaRw4yCjSdOl5Q9NaE58hIYNruRdwQz-tHf0UhzQzMT_-wSleXs2JhOmXJTIfWqwl9g8-qPQBcxUpUYyaHxBEYj8dtK4x-fJkUeBmPwuFcLa3ZBb7u8MV2F-NoTADtvZoEwEo-VeJ-T5ZCwx5Bgx20cvZAnSagPgu8ZOZcDMKDAMq_TnB-DtuILSS6Z8VJSeHqMhJ5aqYlXEf8RhyfT_B6vg_6lowqM5c-qlKpWljAqWNyWqxFx81Cca7cDQjVVraaSX8GNQQsOp5llhG3TAEyZ77uO8H30SFTmkbAG5ytUH2_iuftp-rPfeIgzvfxDEYaYMNgLGgHu3iVoO-L0zdUDaeMQYS-soK9EO3GepNWwka_IxqV_1bzrbc2Vha_xyVPOeHAhR1Y-18LcppfrnnBVszdlk2OthJs5Y244k3LtzvRemmMIhND7SgSxqe1CYaBZHWP_K7ezqmfOqxgozxBrLErfEzA08YT1x4_XE75AZHxGXoFk1kbc_rNRvJAneVb5DlcINgP9oB2uxAjiVhScgJqgVVLEN0dTz9J5aY-0gt75TDZp9XObAslLGKDXDf0vzHytUWdIs8ZjAwegCfUVn8WbkQQLemmjtD9mn6gJkrMndTe7p0lXrjyMXsStBIo`,
          },
        }
      )

      .then((res) => {
        console.log("Getting from:", res.data);
        setData(res.data.data);
      })

      .catch((err) => console.log(err));
  }, [deleteId]);

  const deleteObjective = (data) => {
    axios
      .delete(
        `http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/objective/delete/${data}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjgsImFkbWluX25hbWUiOiJBbnVyYSBBbWFyYWJhbmR1IiwiZW1haWxfYWRkcmVzcyI6ImFudXJhQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIwNzc4OTg5NTk4Iiwic3RhdHVzIjoiQURNSU4ifSwiaWF0IjoxNjQ2ODA1OTcyNTYyLCJleHAiOjE2NDY4MDcxODIxNjJ9.ovNWylxyptm9pXJ4dxYR8robCKekTFjjaZjrLOaup3zhg3RK8o6elT8E4iwN6251RMvEux25SzQUBbo3EXDxAvuv1dPLEk1jL04P_rRejurY1W6C_b8LceqWpcJbuVKKJHigik4v8GxBguAsnUEeKsB_tNypKaSWv6K0pgt6ajuaEZktSKeHwuGVGmv8Zhpccbkh7R_gW1KkJs-iBRqn27aTBDX2XUSt94_J1pu0dTI6-Au4zHKwp-H8-PkFK1yq8e0cUZUzbvYOAy9QeUIinVQk0Nx0rRtp4fE1GVkQe_s5Zq819ZT_5HdjXkHE3XIBpkUcCR7Mgf68VfrdVE0awaXFiOzob3uQu7Wq86B0HYQmndFMEQeMOHCu6xbnbY-QT8IqwUSPBJeLunfkksMc6hHjI5kpCPieJ_HWIqsa-h-gG9F0T2g0eMkxWUV2jHsXwgKltcz0lI5Nh7L6OgCllZrEhTFt3K81qhaYKgIztZOEK4XLtAgj0ClK0U-DLSev1y7a4iZXx3PgyT14hCx9ljfvLXjDhCmKKSRko_1lYMVSuwl2a1e_WVfTbk46gKEXyDn_8V3lEeqCrlfu-UI2aCwcZB36t2tRQBqT2z7qYjVvnfNXMu3pPF5aq-qme7mhn-kT4QskKXvWXFft-4D6wqEnGxx91ksc1GEQ8wnQ3NA`,
          },
        }
      )
      .then((res) => {
        if (
          res.data.code === 200 &&
          res.data.message === "succesfully deleted" &&
          res.data.success === true
        ) {
          console.log(res.data.message);
        } else if (res.data.success === false) {
          console.log(res.data.message);
        } else {
          console.log(res.data.message);
        }
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.error("delete fail! server error", error);
      });
  };


  const editObjective = (data) => {
    // console.log(data);

    axios
      .get(
        `http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/objective/getObjective/${data}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjEzLCJhZG1pbl9uYW1lIjoic2FnYXJhaCIsImVtYWlsX2FkZHJlc3MiOiJzYWdhcmFoQGdtYWlsLmNvbSIsIm1vYmlsZV9udW1iZXIiOiIwNzc4OTg5NTk4Iiwic3RhdHVzIjoiQURNSU4ifSwiaWF0IjoxNjQ3NDIwNjAyMzQ2LCJleHAiOjE2NDc0MjE4MTE5NDZ9.huDeLFH61HQSeFP_K_E2Co8h7JMNG57Hm8kRGUllnoaRw4yCjSdOl5Q9NaE58hIYNruRdwQz-tHf0UhzQzMT_-wSleXs2JhOmXJTIfWqwl9g8-qPQBcxUpUYyaHxBEYj8dtK4x-fJkUeBmPwuFcLa3ZBb7u8MV2F-NoTADtvZoEwEo-VeJ-T5ZCwx5Bgx20cvZAnSagPgu8ZOZcDMKDAMq_TnB-DtuILSS6Z8VJSeHqMhJ5aqYlXEf8RhyfT_B6vg_6lowqM5c-qlKpWljAqWNyWqxFx81Cca7cDQjVVraaSX8GNQQsOp5llhG3TAEyZ77uO8H30SFTmkbAG5ytUH2_iuftp-rPfeIgzvfxDEYaYMNgLGgHu3iVoO-L0zdUDaeMQYS-soK9EO3GepNWwka_IxqV_1bzrbc2Vha_xyVPOeHAhR1Y-18LcppfrnnBVszdlk2OthJs5Y244k3LtzvRemmMIhND7SgSxqe1CYaBZHWP_K7ezqmfOqxgozxBrLErfEzA08YT1x4_XE75AZHxGXoFk1kbc_rNRvJAneVb5DlcINgP9oB2uxAjiVhScgJqgVVLEN0dTz9J5aY-0gt75TDZp9XObAslLGKDXDf0vzHytUWdIs8ZjAwegCfUVn8WbkQQLemmjtD9mn6gJkrMndTe7p0lXrjyMXsStBIo`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const objective = res.data.data[0];

        SetObjective({
          ...Objective,
          category_id: objective.category_id,
          sub_category_id: objective.sub_category_id,
          objective_name: objective.objective_name,
        });
      });
    setVisible(true);
  };
  console.log(visible);
  console.log(Objective);
  const drawer = () => {
    return (
      <div>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="category_id">Category ID</label>
            <input
              type="number"
              name="category_id"
              className="form-control"
              id="category_id"
              value={Objective.category_id}
              // onChange={handleChange}
              placeholder="Category ID"
            />
          </div>
          <br />


          <div className="form-group">
            <label htmlFor="sub_category_id">sub Category ID</label>
            <input
              type="number"
              name="sub_category_id"
              className="form-control"
              id="sub_category_id"
              value={Objective.sub_category_id}
              // onChange={handleChange}
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
              value={Objective.objective_name}
              // onChange={handleChange}
              placeholder="Objective Name"
            />
          </div>

          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
          <button className="btn btn-light">Cancel</button>
        </form>
      </div>
    );
  };
  const arr = data.map((data, index) => {
    return (
      <tr>
        {/* <td>{data.id}</td> */}
        <td>{data.category_id}</td>
        <td>{data.sub_category_id}</td>
        <td>{data.objective_name}</td>
        <td>
          <div className="row">
            <div className="col-6">
              <button
                // class="btn btn-deep-purple"
                onClick={() => editObjective(data.id)}
              >
                Edit
                {/* <i class="fa fa-pencil mr-1"></i> Edit */}
              </button>
            </div>
          </div>
        </td>
        <td>
          <div className="row">
            <div className="col-6">
              <button
                // className="deleteButton"
                onClick={() => deleteObjective(data.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </td>
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
                    <h1 className="card-title">List of All Objective </h1>
                    <p className="card-description">Check All Objective List</p>
                    <br />
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Category ID</th>
                            <th>Sub Category Id</th>
                            <th>Objective Name</th>
                            <th>Action</th>
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
          {visible == true ? drawer() : null}
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}

export default ObjectiveList;
