
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uiActions } from '../store/ui/actions';
import SideNav from './common/SideNav'


const SideNavMobile = props => {

  
    return (
        <>
        <SideNav open ={props.open}>
     
        </SideNav> </>
    );
}



/* const mapStateToProps = (state) => {
    return {
        route: state.ui.route,
        data: state.ui.ride
        
    }
};

const mapDispatchToProps = dispatch => ({
    setActiveRoute: route => dispatch(uiActions.setActiveRoute(route)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNavMobile);
 */

export default SideNavMobile






















