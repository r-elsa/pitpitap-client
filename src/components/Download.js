import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image } from '../components/common';
import appleicon from '../assets/images/app-store-badge-us-black.png';
import android_icon from '../assets/images/google-play-badge-us.png';

const Download = props => {

    const [variable, setVariable] = useState('initial value');

    return (
        <GridContainer gridTemplateColumns= 'repeat(2, 1fr)' gridTemplateRows= '1fr' gridGap= '0' margin='auto'  width='15vw' height='10vh' > 
                         
           <a href="https://play.google.com/store/apps?hl=en" target="_blank"><Image src={android_icon} height='40rem' m='auto'/></a> 
           <a href="https://www.apple.com/il/ios/app-store/" target="_blank"><Image src={appleicon} height='40rem'm='auto'/></a> 
        
       </GridContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
    exampleFunctionToDispatch: data => dispatch(()=>(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Download);