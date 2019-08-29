import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import { theme } from './../theme';
import Main from './Main';
import Login from './Login';
import AppHeader from './../components/layout/AppHeader';
import AppFooter from './../components/layout/AppFooter';
import { userActions } from '../store/user/actions';


// this is the first page of the app
// you can chhose between an app with/without login


const App = props => {

  // this function is called only onced when the app is started
  // in this place you can put all the inital called for getting user data
  useEffect(() => {
    let localUser = JSON.parse(localStorage.getItem('localUser')) || {};
    // props.logIn(localUser.token);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <div className="main-container" >
          <div className='app-header'><AppHeader /></div>
          {
            /* Application with login */
            // props.loggedIn ? <BrowserRouter><Main /></BrowserRouter> : <Login />
          }
          {
            /* Application without login */
            <BrowserRouter><Main /></BrowserRouter>
          }

          <div className='app-footer'><AppFooter /></div>
        </div>
        {
          // Loader
          props.loading ?
            <div className='loader-container'>
              <div className="loader"><div></div><div></div><div></div><div></div></div>
            </div> : null
        }
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  const loading = state.ui.pendingRequests > 0;

  return {
    loading,
    loggedIn: !!state.user.client.status
  }
};

const mapDispatchToProps = dispatch => ({
  logIn: (data) => dispatch(userActions.logIn(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
