import React, { Component } from "react";
import Dashboard from "../DashBoard/dashboard";
import DashboardFooter from "../DashBoard/dashboard_footer";
import DashboardMenu from "../DashBoard/dashboard_menu";
import "../assets/category.scss";
import Back from "../assets/images/add_image1.png";
import { useState } from "react";
import axios from "axios";


// const initialState = {
//   image: null,
//   previewImage: Back,
// };

 class NewSubCategory extends Component {
   //const NewSubCategory  = () => {
   constructor(props) {
     super(props);
     //  this.state = initialState;
     this.state = {
       image: null,
       mainCategory: "",
       subCategory: "",
       Challenge: "",
       previewImage: Back,
     };
     this.onFileChange = this.onFileChange.bind(this);
   }
   onFileChange = (event) => {
     //  this.setState({ image: event.target.files[0] });
     //  this.setState({ previewImage: URL.createObjectURL(event.target.files[0]) });
     const { name, value } = event.target.files[0];
     this.setState({ ...this.state, [name]: value });
     this.setState({
       previewImage: URL.createObjectURL(event.target.files[0]),
     });
   };

   handleChange = (event) => {
     const { name, value } = event.target;
     this.setState({ ...this.state, [name]: value });
     console.log(this.state);
   };

   
   handleSubmit = (event) => {
     event.preventDefault();
     const { image, mainCategory, subCategory, Challenge } = this.state;
     const subCategoryList = {
       categoryImageFile: image,
       mainCategory: mainCategory,
       subCategory: subCategory,
       Challenge: Challenge,
     };

     axios
       .post(
         ` http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/addSubCategoryToAdminPanel`,
         subCategoryList
       )
       .then((res) => {
         this.setState({
           image: null,
           mainCategory: "",
           subCategory: "",
           Challenge: "",
           previewImage: Back,
         });
         console.log(res);
         console.log(res.data.data);
       });
   };
   // const [mainCategory, setMainCategory] = useState("");
   // const [subCategory, setSubCategory] = useState("");
   // const [Challenge, setChallenge] = useState("");

   //  const onChangeFile = (e) => {
   //    setFileName(e.target.files[0]);
   // };

   // const changeOnClick = (e) => {
   //   e.preventDefault();

   //   const formData = new FormData();

   //   formData.append("fname", fname);
   //   formData.append("lname", lname);
   //   formData.append("address", address);
   //   formData.append("email", email);
   //   formData.append("contactNumber", contactNumber);

   //   setMainCategory("");
   //   setSubCategory("");
   //   setFileName("");
   //   setChallenge("");

   //   Axios.post(
   //     "http://ec2-35-83-63-15.us-west-2.compute.amazonaws.com:8000/admin/addSubCategoryToAdminPanel"
   //   )

   //     .then((res) => {
   //       console.log("Getting from:", res.data);
   //       setDate(res.data.data);
   //     })

   //     .catch((err) => console.log(err));
   // }

  //  state = {
  //    mainCategory: "",
  //    subCategory: "",
  //    Challenge: "",
  //  };
  //  handleChange = (event) => {
  //    this.setState({ name: event.target.value });
  //  };
   render() {
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
                         <h1 className="card-title">
                           New Sub Category Details
                         </h1>
                         <p className="card-description">
                           Now You can add new Sub Category Details
                         </p>
                         <br />
                         <form
                           className="forms-sample"
                           onSubmit={this.handleSubmit}
                         >
                           <div class="form-group">
                             <label for="exampleSelectGender">
                               Main Category
                             </label>
                             <select
                               class="form-control"
                               id="exampleSelectGender"
                               name="mainCategory"
                               value={this.state.mainCategory}
                               onChange={this.handleChange}
                             >
                               <option value="sports">Sports</option>
                               <option value="fashion">Fashion</option>
                             </select>
                           </div>
                           <div className="form-group">
                             <label htmlFor="exampleInputName1">
                               Sub Category Name
                             </label>
                             <input
                               type="text"
                               className="form-control"
                               id="exampleInputName1"
                               placeholder="Category Name"
                               name="subCategory"
                               value={this.state.subCategory}
                               onChange={this.handleChange}
                             />
                           </div>

                           <div className="form-group">
                             <label>Sub Category Images</label>
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
                             <label htmlFor="exampleTextarea1">Challenge</label>
                             <textarea
                               className="form-control"
                               id="exampleTextarea1"
                               rows={4}
                               defaultValue={""}
                               name="Challenge"
                               value={this.state.Challenge}
                               onChange={this.handleChange}
                             />
                           </div>
                           <button
                             type="submit"
                             className="btn btn-primary mr-2"
                           >
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
   }
 }
export default NewSubCategory;
