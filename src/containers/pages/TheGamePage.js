import React, { useState, useEffect, Component} from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image, SvgContainer} from '../../components/common'; 
import { userActions } from '../../store/user/actions';
import group_four from '../../assets/images/group-4.png';
import group_six from '../../assets/images/group-6.png';
import bigpitpitap from  '../../assets/images/pitpitap.png';
import fill_one from  '../../assets/images/fill-1.png';
import { ReactComponent as Menu } from '../../assets/images/menu.svg'; 
import Slider from '../../components/TheGamePage/Slider'
import defaultSlides from '../../components/TheGamePage/defaultSlides';
import Download from '../../components/Download'





const TheGamePage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
         
      }, [])

    return (
        <FlexContainer flexDirection='column' alignItems='center'>


        <GridContainer gridTemplateColumns= 'repeat(3, 1fr)' gridTemplateRows= 'auto' gridGap= '8px' margin='auto' height='70vh' width='80vw'>

        <Image src={group_six} height='65vh' m='auto'/>
        <div style = {{paddingTop:'60rem'}}>
        <GridContainer gridTemplateColumns= '1fr 2fr 1fr' gridTemplateRows= 'auto' gridGap= '2vw' margin='auto' height='10vh' width='100%'> 
                <Image src={fill_one} margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Image src={bigpitpitap} height='55rem' margin='auto'/>
                <Image src={fill_one} margin='auto' />
                
               </GridContainer>
     
    
        <Text fontSize='25rem' marginBottom='15rem'>גלריית התמונות הראשונה שלי</Text>
        <Text fontSize='20rem'  fontFamily='RoundedMplus1c-Regular'margin='10rem 30rem'   lineHeight= '1.6'>יצרנו עבור הילדים שלנו את גלריית התמונות הראשונה שלהם והחלטנו להביא אותה לעולם כדי שעוד מלא ילדים יוכלו להנות מחוויה כיפית, מוגנת, מלמדת ומקרבת למשפחה ולדברים שהקטנטנים שלנו הכי אוהבים להכיר ולגלות</Text>
        <Text fontSize='35rem' fontFamily='RoundedMplus1c-Bold' padding='50rem 0 10rem 0' fontWeight= 'bold'>הורידו עכשיו</Text>

        <Download/>
        <Slider slides = {defaultSlides} margin='auto'/>
        </div>
        <Image src={group_four} height='65vh' m='auto' />
          
        </GridContainer>
        <FlexContainer>
      
        </FlexContainer> 
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

export default connect(mapStateToProps, mapDispatchToProps)(TheGamePage);