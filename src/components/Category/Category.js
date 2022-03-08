import { Link, useHistory } from "react-router-dom";
import styles from "../Category/styles.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const history = useHistory();
  const [categoryTitle, setcategoryTitle] = useState("");
  const [description, setdescription] = useState("");
  const [categoryImageFile, setcategoryImageFile] = useState("");
  const [error, setError] = useState("");

  const onChangeFile = (e) => {
    setcategoryImageFile(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", categoryTitle);
    formData.append("description", description);
    formData.append("image",categoryImageFile );

    setcategoryImageFile("");
    setcategoryTitle("");
    setdescription("");
    

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
        text: "You have added category sucessfully.",
        confirmButtonColor: "#3bb19b",
        timer: 1500,
      });
      // history.push("/");
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
    <div className={styles.container}>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={changeOnClick}>
              <h3>Create Category</h3>

              
              <input
                type="text"
                placeholder="Category Name"
                id="title"
                value={categoryTitle}
                onChange={(e) => setcategoryTitle(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="description"
                id="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
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
              
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
