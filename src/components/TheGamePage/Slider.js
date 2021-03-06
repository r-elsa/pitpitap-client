
import React, { useState } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image, SvgContainer} from '../../components/common'; 
import { Navigation, NavigationItem, BoxContainer, SlideContainer, Slide, Button } from './Slider.style'

const SimpleSlider = ({slides, isMobile}) => {

/*     const [slide, setSlide] = useState(slides); */


    const settings = {
     
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        
      };

    return (
         <SlideContainer>
             <Text fontSize='20rem' fontFamily='Rounded1c_Medium' margin='auto' marginBottom='0' >אז איך משחקים?  </Text>
        <Slider {...settings}>
          

        {slides.map((slide,index) => (
               <div style={{width: isMobile ? "35vw" : "80vw"  }} key = {slide.title}>
                   <Text fontSize='18rem' fontFamily ='Rounded1c_Regular'>{slide.title}</Text>
                   
               
                   </div>
           ))}

        </Slider>
        </SlideContainer>

    );
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
 /*    exampleFunctionToDispatch: data => dispatch(()=>(data)), */
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSlider);



























/* import React, {useState} from 'react'
import { Navigation, NavigationItem, BoxContainer, SlideContainer, Slide, Button } from './Slider.style'
import { FlexContainer, Text, GridContainer, Image, SvgContainer} from '../../components/common'; 

const Slider = ({slides}) => {
    const [curr, setCurr] = useState(0)
    const {length} = slides;


    console.log(curr)

    const decrease =()=>{   
        setCurr(curr > 0 ? curr-1 : curr)
    }

    const increase =()=>{
        setCurr(curr < length -1 ? curr+1: curr)    
     }


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
   

    return (
        <BoxContainer>

        <div></div>
        <Text fontSize='18rem' fontFamily='Rounded1c_Medium' margin='auto' marginBottom='0' >אז איך משחקים?  </Text>
        <div> </div>
        <div style= {{textAlign:'left'}}> <Button onClick = {decrease}> &lt; </Button></div>

         <SlideContainer>
                
           {slides.map((slide,index) => (
               <Slide className ={index === curr ? "slide active": "slide"} key = {slide.title}>
                   <Text fontSize='18rem' fontFamily ='Rounded1c_Regular'>{slide.title}</Text>
                   
               
               </Slide>
           ))}
       
        </SlideContainer>
        <div style= {{textAlign:'right'}}> <Button  onClick = {increase}> > </Button></div>
        <div></div>
        <div> {slides.map((slide,index) => (

            <Navigation>

                    <NavigationItem className = {index === curr ? "active": ""} key = {slide.title}/>
                            
            </Navigation>     
           
            ))}</div>

         <div>   </div>

         </BoxContainer>

    )
}
  

export default Slider */



