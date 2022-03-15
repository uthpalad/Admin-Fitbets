/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "../DashBoard/dashboard";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "./userList";

function Uaerlist() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    // Axios.get("https://jsonplaceholder.typicode.com/posts")
    axios
      .get(
        "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/user/get-all-users/"
      )

      .then(res => {
        console.log("Getting from:", res.data);
        setDate(res.data.data);
      })

      .catch(err => console.log(err));
  }, []);

  // const deleteItems = (oldData) => {
  //   axios
  //     .delete(`delete url/${oldData.id}`, {
  //       headers: {

  //       },
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       console.log(res.data.length);
  //       const users = res.data.data;
  //       setuserDetail(users);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.username}</td>
        <td>{data.gender}</td>
        <td>{data.birthday}</td>
        <td>{data.email_address}</td>
        <td>{data.mobile_number}</td>
        <td>{data.nationality_id}</td>
        <td>
          <img
            src={data.player_card_url}
            width="50px"
            height="50px"
            border-radius="50%"></img>
        </td>
      </tr>
    );
  });

  return (
    <div className="container-scroller">
      <Dashboard />
      <div className="container-fluid page-body-wrapper">
        <DashboardMenu />
        <div className="App">
          <h1>User List</h1>
          <table id="customers">
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Nic</th>
              <th>Profile Image</th>
            </tr>
            {arr}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Uaerlist;
