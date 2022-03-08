import { Link, useHistory } from "react-router-dom";
import styles from "../Register/styles.module.css";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [filename, setFileName] = useState("");
  const [error, setError] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("contactNumber", contactNumber);
    formData.append("password", password);
    formData.append("image", filename);

    setFname("");
    setLname("");
    setAddress("");
    setEmail("");
    setContactNumber("");
    setFileName("");
    setPassword("");

    //  axios.post('http://localhost:9000/employee/createEmployee',formData)
    //  .then((res)=>(res.data.success))
    //  .catch((err)=>{
    //      console.log(err);
    //  })
    try {
      axios
        .post("http://localhost:9000/employee/createEmployee", formData)
        .then((res) => {
          console.log(res);
        });

      Swal.fire({
        title: "Success",
        type: "success",
        text: "You have sucessfully Registered.",
        confirmButtonColor: "goldenrod",
        timer: 1500,
      });
      history.push("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h6>Do you have an Account? </h6>
          <Link to="/">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={changeOnClick}>
            <h3>Create Account</h3>

            <input
              type="text"
              placeholder="First Name"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Contact Number"
              id="fname"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="file"
              placeholder="Upload your image"
              filename="image"
              onChange={onChangeFile}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
