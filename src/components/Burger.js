
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as HamburgerMenu } from '../assets/images/menu.svg';
import SideNavMobile from './SideNavMobile'
import NavBarLink, { ItemUnderLine } from '../components/layout/NavBarLink';
import { userActions } from '../store/user/actions'
import { uiActions } from '../store/ui/actions';


const Burger = props => {

    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState('orders');


    const isExpanded = open ? true : false;
    
    const handleLinkClick = (route) => {
      props.chageRoute(route);
      handleClick()

  }

  const handleClick = ()=>{
    setOpen(false)
  }


    return ( 
      <>
      <HamburgerMenu /* aria-label="Toggle menu" aria-expanded={isExpanded} */ open={open} onClick={() => setOpen(!open)} > </HamburgerMenu>

        <div className={`side-menu ${open ? 'open' : 'closed'}`}>
        
        <div>
        <NavBarLink active={activeItem === 'thegame'} onClick={() => handleLinkClick('thegame')}>המשחק</NavBarLink>
        <NavBarLink active={activeItem === 'whoweare'} onClick={() => handleLinkClick('whoweare')}>מי אנחנו</NavBarLink>
        <NavBarLink active={activeItem === 'playnow'} onClick={() => handleLinkClick('playnow')}> שחקו עכשיו</NavBarLink>
        <NavBarLink active={activeItem === 'qanda'} onClick={() => handleLinkClick('qanda')}> שאלות ותשובות</NavBarLink>
        <NavBarLink active={activeItem === 'contact'} onClick={() => handleLinkClick('contact')}>צרו קשר</NavBarLink>
        </div>

      </div>
       
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


