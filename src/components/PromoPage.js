import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text, AbsoluteContainer, GridContainer, Image } from '../components/common';
import bearairplane from './../assets/images/bear-and-airplan.svg';
import bearandballon from './../assets/images/bear-and-ballon.svg';
import mockup from './../assets/images/mockup.png'
import bearandcar from './../assets/images/beacr-and-car.svg'
import Download from './Download';




const PromoPage = props => {


    return (
        <div>
        <GridContainer gridTemplateColumns= {['1fr','repeat(3, 1fr)']} gridTemplateRows= '1fr' gridGap= '0' margin='auto'  width={['90vw','50vw']} height={['auto','45vh']} >

        <Image src={bearandballon} position={['absolute', 'relative']} top={['450rem', '0']} right= '20rem' zIndex='0' height={['28vh','43vh']} margin='auto' />
    
        <Image src={mockup} position={['relative', 'relative']} height={['50vh','48vh']} zIndex='1' margin='auto'/>
      
        <Image src={bearairplane} position={['absolute', 'relative']} top={['345rem', '0']} left= '0' height={['18vh','30vh']} zIndex='0' marginTop={['50rem','0']} />
        </GridContainer>
      
        <GridContainer gridTemplateColumns= '1fr 4fr 1fr' gridTemplateRows= '1fr' gridGap= '0' margin='auto'  width={['90vw','60vw']} height='15vh' >
            <div></div>
       
        <GridContainer gridTemplateColumns= '1fr' gridTemplateRows= '1fr 1fr' gridGap= '0' margin='auto' marginTop= {['30rem','20rem']} marginBottom={['30rem', '0']}>
                     <Text fontSize='30rem' fontFamily='Rounded1c_Bold' margin='0' marginBottom='10rem'>הורידו עכשיו ותהנו 
מ-5 ימי ניסיון בחינם!</Text>
        <Download />
                
        </GridContainer>
      
        <div>   <Image src={bearandcar} position={['absolute', 'relative']} zIndex='0' top={['680rem', '0']} left= {['50rem','50rem']} height={['15vh','20vh']} margin='auto' /></div>

        </GridContainer>
     

      
   

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
    exampleFunctionToDispatch: data => dispatch(()=>(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PromoPage);
