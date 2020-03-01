
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as HamburgerMenu } from '../assets/images/menu.svg';
import NavBarLink, { ItemUnderLine } from '../components/layout/NavBarLink';
import { userActions } from '../store/user/actions'
import { uiActions } from '../store/ui/actions';
import Sidemenu from './SideMenu'


const Burger = props => {

    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(props.activeRoute);

/* 
    const isExpanded = open ? true : false; */
    
  /*   useEffect(() => {
        console.log(props.activeRoute)
       
    }, [])
 */

 /*    const handleLinkClick = (route) => {
      props.chageRoute(route);
      setActiveItem(route)
      handleClick()
     

  }
 */
 


/*   {clickedOutside ? "Bye!" : "Hello!"} */

  

    return ( 
      <>
      <HamburgerMenu /* aria-label="Toggle menu" aria-expanded={isExpanded} */ onClick={() => setOpen(!open)} />

       {open && <Sidemenu handleBurgerClick = {()=> setOpen(false)}   />
        
                            }
  
       
      </>

    );
}



const mapStateToProps = (state) => {
  return {
      loggedIn: !!state.user.client.status,
      userName: state.user.client.name,
      activeRoute: state.ui.activeRoute,
      showCartModal: state.ui.showCartModal,
  }
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(userActions.logOut()),
  hideCartModal: () => dispatch(uiActions.toggleCartModal(false)),
  chageRoute: (title) => dispatch(uiActions.setActiveRoute(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Burger);


