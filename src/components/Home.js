import styled from "styled-components";
import React, { Component } from "react";
// import ImgSlider from "./ImgSlider"
import ViewerProfiles from "./ViewerProfiles";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <ViewerProfiles />
      </div>
    );
  }
}

//  const Container = styled.main`

//  max-width: 1320px;
//  margin-left:200px;
//   position: relative;
//   min-height: calc(100vh - 700px);
//   overflow-x: hidden;
//   display: block;
//   top: 0px;
//   padding: 0 calc(3.5vw + 5px);
//   &:after {
//     background: url("/images/login-background.jpg") center center / cover
//       no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset: 0px;
//     opacity: 1;
//     z-index: -1;
//   }
//  `;
