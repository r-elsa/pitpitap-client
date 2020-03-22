import React, { useState } from "react";
import { connect } from "react-redux";
import { uiActions } from "../store/ui/actions";
import SideNav from "./common/SideNav";

const SideNavMobile = props => {
  return (
    <>
      <SideNav open={props.open}></SideNav>{" "}
    </>
  );
};

export default SideNavMobile;
