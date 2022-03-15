import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Components/DashBoard/dashboard";
import NewCategory from "./Components/Category/addCategory";
import Home from "./Components/home";
import CategoryList from "./Components/Category/categoryList";
import NewSubCategory from "./Components/SubCategory/addSubCategory";
import UserDetails from "./Components/UserDetails/userDetails";
import UserList from "./Components/UserList/UserList";
import SubCategoryList from "./Components/SubCategory/subCategoryList";

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
