import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import { userActions } from '../store/user/actions';

import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

const Main = (props) => {

    // getting all user data. call all the
    useEffect(() => {

    }, []);


    // setting the active route. the route is coming from the store
    useEffect(() => {
        props.history.push(props.activeRoute)
    }, [props.activeRoute]);

    return (
        <Fragment>
            <div className="app-body">
                <Switch>
                    <Route path='/service' component={ServicePage} />
                    <Route path='/about' component={AboutPage} />
                </Switch>
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        activeRoute: state.ui.activeRoute,
    }
};

const mapDispatchToProps = dispatch => ({
    example: () => dispatch(() => {/* here you call the action you want */ })
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
