import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FlexContainer, SvgContainer, RelativeContainer, AbsoluteContainer, Image, Container, Text, Menu, Button, NavbarContainer } from '../common';

import HeaderLink, { ItemUnderLine } from './HeaderLink';
import { userActions } from '../../store/user/actions'
import { uiActions } from '../../store/ui/actions';
import logoSource from './../../assets/images/logo.jpg';
import pitpitaplogo from './../../assets/images/pitpitap.png';
import { ReactComponent as CartIcon } from './../../assets/images/cart-icon.svg'
import Burger from './../Burger'
import  SideMenu from './SideMenu'

import { MobileContainer } from '../common';


const NotificationCircle = styled.div`
height: 19rem;
width: 19rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 11rem; 
font-weight: 800;
font-family: Assistant;
color: white;
background-color: #ff3838;
`

const AppHeader = props => {

    const [activeItem, setActiveItem] = useState('orders');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const userMenuRef = useRef(null);
    const cartMenuRef = useRef(null);
    const { loggedIn, showCartModal, selectedProduct } = props;

    const handleUserMenuOpen = () => {
        setShowUserMenu(true);
    }

    const handleLogoutClick = () => {
        props.logOut()
        setShowUserMenu(false);
    }

    const handleClickOutsideUserMenu = (event) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
            setTimeout(() => {
                setShowUserMenu(false);
            }, 200)
        }
    }

    useEffect(() => {
        if (showUserMenu) {
            document.addEventListener("mousedown", handleClickOutsideUserMenu);
            return () => {
                document.removeEventListener("mousedown", handleClickOutsideUserMenu);
            };
        }
    }, [showUserMenu]);

    // handle cart menu events

    const handleCartModalClick = () => {
        props.hideCartModal();
        handleLinkClick('cart', 'cart');
    }

    const handleClickOutsideCartMenu = (event) => {
        if (cartMenuRef.current && !cartMenuRef.current.contains(event.target)) {
            setTimeout(() => {
                props.hideCartModal();
            }, 200)
        }
    }

    useEffect(() => {
        if (showCartModal) {
            window.scrollTo(0, 0);
            document.addEventListener("mousedown", handleClickOutsideCartMenu);
            return () => {
                document.removeEventListener("mousedown", handleClickOutsideCartMenu);
            };
        }
    }, [showCartModal]);

    // handling route selection actions
    useEffect(() => {
        setActiveItem(props.activeRoute);
    }, [props.activeRoute])

    const handleLinkClick = (route) => {
        props.chageRoute(route);
    }

    return (
        <FlexContainer justifyContent='spaceBetween' alignItems='center' height='100%'>
           {/*  <Container className='mobile-show pointer' mr='50rem' width='30rem' height='30rem'>
           


            </Container> */}
             
            <MobileContainer>
                <Burger />
               {/*  <SideMenu /> */}
                </MobileContainer>
        {/*     <FlexContainer alignItems='flex-end'>

             
    
              
                <RelativeContainer className='mobile-hide pointer'>
                    <Text
                        mr='30rem' fontSize='17rem' fontWeight='600' color='blue.2'
                        onClick={handleUserMenuOpen}
                    >
                        {props.userName}
                    </Text>
                    <Menu 
                        height={showUserMenu ? '70rem' : '0'} 
                        opacity={showUserMenu ? '1' : '0'} 
                        ref={userMenuRef} width='150rem' top='15rem' left='0'
                    >
                        <FlexContainer height='100%'>
                            <Text fontSize='17rem' color='blue.2' className='pointer' onClick={handleLogoutClick}>{'logout'}</Text>
                        </FlexContainer>
                    </Menu>
                </RelativeContainer>

            </FlexContainer> */}
            <NavbarContainer opacity={loggedIn ? '1' : '1'} pt='15rem' className='mobile-hide'>
                <HeaderLink active={activeItem === 'thegame'} onClick={() => handleLinkClick('thegame')}>המשחק</HeaderLink>
                <HeaderLink active={activeItem === 'whoweare'} onClick={() => handleLinkClick('whoweare')}>מי אנחנו</HeaderLink>
                <HeaderLink active={activeItem === 'playnow'} onClick={() => handleLinkClick('playnow')}> שחקו עכשיו</HeaderLink>
                <HeaderLink active={activeItem === 'qanda'} onClick={() => handleLinkClick('qanda')}> שאלות ותשובות</HeaderLink>
                <HeaderLink active={activeItem === 'contact'} onClick={() => handleLinkClick('contact')}>צרו קשר</HeaderLink>

          
            </NavbarContainer>
            <FlexContainer>
                
            <Image src={pitpitaplogo} width='160rem' height='40rem' />
               {/*  {loggedIn || true &&
                    <RelativeContainer className='pointer'>
                        <FlexContainer flexDirection='column' height='85rem' {...props} style={{ position: 'relative' }}>


                            <SvgContainer height='39rem' width='38rem' className='pointer' onClick={() => handleLinkClick('cart', 'cart')}>

                                
                                <CartIcon />
                                {props.numOfCartItems && <AbsoluteContainer top='-1rem' right='7rem'>
                                    <NotificationCircle>{props.numOfCartItems}</NotificationCircle>
                                </AbsoluteContainer>}
                            </SvgContainer>
                            {activeItem === 'cart' && <ItemUnderLine />}
                        </FlexContainer>
                        <Menu
                            height={showCartModal ? '400rem' : '0'} width='500rem' opacity={showCartModal ? '1' : '0'} ref={cartMenuRef}
                            top='63rem' left='-28rem'
                        >
                            <FlexContainer height='100%' flexDirection='column' justifyContent='flex-start'>

                            </FlexContainer>
                        </Menu>
                    </RelativeContainer>
                } */}
            </FlexContainer>
        </FlexContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
