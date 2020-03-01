
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {SideMenuContainer} from './SideMenu.style'
import NavBarLink, { ItemUnderLine } from '../components/layout/NavBarLink';
import { uiActions } from '../store/ui/actions';



const SideMenu = props => {
    const node = useRef();

    const [open, setOpen] = useState(props)
    const [activeItem, setActiveItem] = useState(props.activeRoute);
 


    
        useEffect(() => {
            document.addEventListener("click", handleOutsideClick, false);
            console.log('hello from useeffect ')
         
        return () => {
      
        document.removeEventListener("click", handleOutsideClick, false);
        console.log('hello from useeffect 2 ')
        }; 
         }, []);



         const handleOutsideClick = e => {
             console.log('yhis is the e', e)
          
            if (node.current.contains(e.target)) {
        
            return;
            }  
       
         
            setOpen(false);
            props.handleBurgerClick(false)
         
            
            
        }; 

           

    const handleLinkClick = (route) => {
       props.handleBurgerClick(false)
      props.chageRoute(route);
      setActiveItem(route)
      setOpen(false)
    
    
  }


    return (
      
        <SideMenuContainer ref ={node} className={`${open ? 'open' : 'closed'}`}  >
             <div>
        <NavBarLink active={activeItem === 'thegame'} onClick={() => handleLinkClick('thegame')}>המשחק</NavBarLink>
        <NavBarLink active={activeItem === 'whoweare'} onClick={() => handleLinkClick('whoweare')}>מי אנחנו</NavBarLink>
        <NavBarLink active={activeItem === 'playnow'} onClick={() => handleLinkClick('playnow')}> שחקו עכשיו</NavBarLink>
        <NavBarLink active={activeItem === 'qanda'} onClick={() => handleLinkClick('qanda')}> שאלות ותשובות</NavBarLink>
        <NavBarLink active={activeItem === 'contact'} onClick={() => handleLinkClick('contact')}>צרו קשר</NavBarLink>
        </div>
            </SideMenuContainer> 
        
    );
}

const mapStateToProps = (state) => {
    return {
        activeRoute: state.ui.activeRoute,
        
    }
};

const mapDispatchToProps = dispatch => ({
    chageRoute: (title) => dispatch(uiActions.setActiveRoute(title))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);





