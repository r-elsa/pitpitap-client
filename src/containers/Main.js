import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { userActions } from "../store/user/actions";
import TheGamePage from "./pages/TheGamePage";
import PlayNowPage from "./pages/PlayNowPage";
import WhoWeArePage from "./pages/WhoWeArePage";
import QandApage from "./pages/QandApage";
import ContactPage from "./pages/ContactPage";
import SideNavMobile from "../components/SideNavMobile";

const Main = props => {
  useEffect(() => {
    props.history.push(props.activeRoute);
  }, [props.activeRoute]);

  return (
    <Fragment>
      <div className="app-body">
        <Switch>
          <Route path="/thegame" component={TheGamePage} />
          <Route path="/whoweare" component={WhoWeArePage} />
          <Route path="/playnow" component={PlayNowPage} />
          <Route path="/qanda" component={QandApage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    activeRoute: state.ui.activeRoute
  };
};

const mapDispatchToProps = dispatch => ({
  example: () =>
    dispatch(() => {
      /* here you call the action you want */
    })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
