import React from 'react';
import { connect } from 'react-redux';
import { AbsoluteContainer, FlexContainer, Text, Button } from './../components/common';
import { userActions } from './../store/user/actions'

const AppHeader = props => {

    return (
        <FlexContainer
            justifyContent='center' alignItems='center' height='100%'
            backgroundColor='header' boxShadow='0 2rem 10rem 0 rgba(0, 0, 0, 0.33)'
        >
            <Text fontSize='30rem' m='0'>Header</Text>
            <AbsoluteContainer right='0'>
                <Button p='10rem 20rem' variant='greyButton' onClick={props.logOut}>Log Out</Button>
            </AbsoluteContainer>
        </FlexContainer>
    );
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(userActions.logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
