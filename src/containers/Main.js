import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";

import AppHeader from './../components/AppHeader';
import AppFooter from './../components/AppFooter';
import SideMenu from './../components/SideMenu';
import ContainerOne from './bodyContainers/ContainerOne';
import ContainerTwo from './bodyContainers/ContainerTwo';
import ContainerThree from './bodyContainers/ContainerThree';

const Main = () => {
    return (
        <div className="main-container" >
            <div className='main-container-header'><AppHeader /></div>
            <div className="main-container-body">
                <BrowserRouter>
                    <SideMenu />
                    <Switch>
                        <Redirect exact from="/" to="/one" />
                        <Route path='/one' component={ContainerOne} />
                        <Route path='/two' component={ContainerTwo} />
                        <Route path='/three' component={ContainerThree} />
                    </Switch>
                </BrowserRouter>
            </div>
            <div className='main-container-footer'><AppFooter /></div>
        </div>
    );
}


export default connect()(Main);
