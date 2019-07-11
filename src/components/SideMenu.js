import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Text, FlexContainer } from './../components/common';
import SideMenuItem from './SideMenuItem';

const Separator = styled.div`border-bottom: solid 1px rgba(151, 151, 151, 0.5); width: 350rem;`;

const SideMenu = props => {

    const [activeItem, setActiveItem] = useState(props.location.pathname);

    useEffect(() => {
        setActiveItem(props.location.pathname)
    }, [props.location.pathname]);


    const handleItemClick = path => {
        setActiveItem(path);
        props.history.push(path);
    }

    return (
        <FlexContainer
            flexDirection='column'
            justifyContent='start'
            backgroundColor='main'
            boxShadow="0 2px 10px 0 rgba(0, 0, 0, 0.33)"
        >
            <SideMenuItem
                backgroundColor={activeItem === '/one' ? '#f5f9fe' : 'white'}
                onClick={() => handleItemClick('/one')}
            >
                <Text m='0'
                    fontSize='20rem'
                    fontFamily='heebo'
                    letterSpacing='-0.5rem'
                    color={activeItem === '/one' ? 'black' : 'grey'}
                >
                    One
                </Text>
            </SideMenuItem>
            <Separator />
            <SideMenuItem
                backgroundColor={activeItem === '/two' ? '#f5f9fe' : 'white'}
                onClick={() => handleItemClick('/two')}
            >
                <Text m='0'
                    fontSize='20rem'
                    fontFamily='heebo'
                    letterSpacing='-0.5rem'
                    color={activeItem === '/two' ? 'black' : 'grey'}
                >
                    Two
                </Text>
            </SideMenuItem>
            <Separator />
            <SideMenuItem
                backgroundColor={activeItem === '/three' ? '#f5f9fe' : 'white'}
                onClick={() => handleItemClick('/three')}
            >
                <Text m='0'
                    fontSize='20rem'
                    fontFamily='heebo'
                    letterSpacing='-0.5rem'
                    color={activeItem === '/three' ? 'black' : 'grey'}
                >
                    Three
                </Text>
            </SideMenuItem>
            <Separator />
        </FlexContainer>
    );
}


export default withRouter(SideMenu);
