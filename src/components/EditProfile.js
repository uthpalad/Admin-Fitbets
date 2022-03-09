import { Link, useHistory } from "react-router-dom";
import styles from "./Register/styles.module.css";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";

const EditProfile = () => {
  const history = useHistory();
  const [filename, setFileName] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    contactNumber: "",
    password: "",
  });

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };

  const updateUserData = async (e) => {
    e.preventDefault();

    console.log(user);

    axios
      .patch(
        `http://localhost:9000/employee/updateEmployee/${localStorage.getItem(
          "userId"
        )}`,
        user
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

  const getUserData = (userId) => {
    axios
      .get("http://localhost:9000/employee/getEmployee/" + userId)
      .then((res) => {
        const userDetails = res.data.emp;
        setUser({
          ...user,
          fname: userDetails.fname,
          lname: userDetails.lname,
          address: userDetails.address,
          email: userDetails.email,
          contactNumber: userDetails.contactNumber,
          password: userDetails.password,
        });
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getUserData(localStorage.getItem("userId"));
  }, []);

  return (

    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={updateUserData}>
            <h3>Edit Profile</h3>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={user.fname}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={user.lname}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={user.address}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Contact Number"
              name="fname"
              value={user.contactNumber}
              onChange={handleChange}
              required
              className={styles.input}
            />
            
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              // required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
