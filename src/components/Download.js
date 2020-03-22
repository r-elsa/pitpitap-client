import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FlexContainer,
  Text,
  Image,
  DownloadContainer
} from "../components/common";
import appleicon from "../assets/images/app-store-badge-us-black.png";
import android_icon from "../assets/images/google-play-badge-us.png";

const Download = props => {
  const [variable, setVariable] = useState("initial value");

  return (
    <DownloadContainer>
      <a href="https://play.google.com/store/apps?hl=en" target="_blank">
        <Image src={android_icon} height="40rem" ml="7rem" />
      </a>
      <a href="https://www.apple.com/il/ios/app-store/" target="_blank">
        <Image src={appleicon} height="40rem" mr="7rem" />
      </a>
    </DownloadContainer>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  exampleFunctionToDispatch: data => dispatch(() => data)
});

export default connect(mapStateToProps, mapDispatchToProps)(Download);
