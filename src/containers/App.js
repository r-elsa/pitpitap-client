import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from './../helpers/theme';
import Main from './Main';
import Login from './Login';
import { userSettingsActions } from '../store/userSettings/actions';


const App = props => {

  // this function is called only onced when the app is started
  // in this place you can put all the inital called for getting user data
  // useEffect(() => {
  //   props.getUserData()
  // }, [props.loggedIn])

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        {props.loggedIn ? <Main /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
};

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(userSettingsActions.getUserSettings()),

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
