

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';
import illustartion from '../../assets/images/illustration.png';
import   ExPanel  from '../../components/ExPanel'
import fill_one from  '../../assets/images/fill-1.png';
import appleicon from '../../assets/images/app-store-badge-us-black.png';
import google_icon from '../../assets/images/google-play-badge-us.png';
import Download from '../../components/Download'





const QandApage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
         
      }, [])

    return (
        <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>


            <GridContainer gridTemplateColumns= '1fr 2fr 1fr' gridTemplateRows= 'auto' gridGap= '0' margin='auto' height='10vh' width='35%' padding='20rem 30rem'> 
                <Image src={fill_one} margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Text fontSize='45rem' fontFamily='RoundedMplus1c-Medium' margin='auto'>שאלות ותשובות</Text>
                <Image src={fill_one} margin='auto' />
                
               </GridContainer>

              
                <GridContainer gridTemplateColumns= 'repeat(2, 1fr)' gridTemplateRows= 'auto' gridGap= '5%' margin='30rem'  width='60vw' height='40vh' >
               
                    <div><ExPanel /></div> 
                    <div style = {{ display:"inlineBlock"}}> <Image margin='auto' src={illustartion} height='40vh' margin='auto'/></div>
             
                
                     </GridContainer>   

                    <GridContainer gridTemplateColumns= '1fr' gridTemplateRows= '1fr 1fr' gridGap= '0' margin='auto' marginTop='100rem'>
                     <Text fontSize='35rem' fontFamily='RoundedMplus1c-Bold' fontWeight= 'bold' margin='auto'>הורידו עכשיו</Text>

                     <Download/>
                     </GridContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(QandApage);