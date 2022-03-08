import { Link, useHistory } from "react-router-dom";
import styles from "../Subcategory/styles.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const history = useHistory();
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryImageFile, setSubCategoryImageFile] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [challenges, setChallenges] = useState("");
  const [error, setError] = useState("");

  const onChangeFile = (e) => {
    setSubCategoryImageFile(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("categoryId", categoryId);
    formData.append("subimage", subCategoryImageFile);
    formData.append("subname", subCategoryName);
    formData.append("challenges", challenges);

    setCategoryId("");
    setSubCategoryImageFile("");
    setSubCategoryName("");
    setChallenges("");

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
        text: "You have sucessfully added sub category.",
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
              <h3>Create Sub-Category</h3>

              <input
                type="file"
                placeholder="Upload your image"
                filename="subimage"
                onChange={onChangeFile}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Sub Category Name"
                id="subname"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Challenges"
                id="challenges"
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
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
