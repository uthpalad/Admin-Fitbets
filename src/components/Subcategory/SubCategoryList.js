import React from "react";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "../Subcategory/SubCategoryList.css";
import Sidebar from "../Sidebar/Sidebar";

function SubCategoryList() {
  return (
    <div>
      <Sidebar />
      <div className="SubCategoryList">
        <div className="PlusButton">
          <Link to="/subcategory">
            <IoIcons.IoIosAdd />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryList;
