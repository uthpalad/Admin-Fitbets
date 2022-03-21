/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCategory from "./components/Category/addCategory";
import Home from "./components/Home";
import CategoryList from "./components/Category/CategoryList";
import NewSubCategory from "./components/Subcategory/addSubCategory";
import UserDetails from "./components/UserDetails/userDetails";
import UserList from "./components/UserList/Datatable";
import SubCategoryList from "./components/Subcategory/SubCategoryList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<NewCategory />}></Route>
          <Route path="/all_category" element={<CategoryList />}></Route>
          <Route path="/all_subcategory" element={<SubCategoryList />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/sub_category" element={<NewSubCategory />}></Route>
          <Route path="/userDetails" element={<UserDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
