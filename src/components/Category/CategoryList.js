import React from "react";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "../Category/CategoryList.css";
import Sidebar from "../Sidebar/Sidebar";

function CategoryList() {
  return (
    <div>
      <Sidebar />
      <div className="CategoryList">
        <div className="PlusButton">
          <Link to="/category">
            <IoIcons.IoIosAdd />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
