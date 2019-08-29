import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text, AbsoluteContainer } from '../../components/common';
import { userActions } from '../../store/user/actions';


const ServiePage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
        return 
      }, [props.somaValue])

    return (
        <FlexContainer height='100%' flexDirection='column' alignItems='center' justifyContent='flex-start' className='relative'>
                <Text fontSize='40rem' m='50rem 0'>Here you can write what you want about the app but in general this is just a normal container for getting you started</Text>
        </FlexContainer>
    );

}

const mapStateToProps = (state) => {
    // here you can do some manipulation on the data that comes from the store
    return {

    }
};

const mapDispatchToProps = dispatch => ({
    exampleFunc: (data) => dispatch(userActions.login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiePage);
