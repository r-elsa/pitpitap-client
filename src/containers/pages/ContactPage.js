
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';
import facebook from '../../assets/images/facebook.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import fill_one from  '../../assets/images/fill-1.png';
import Download from '../../components/Download'




const ContactPage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
         
      }, [])


      const items = [
                    {   imgsrc:phone,
                        title:'הטלפון שלנו',
                        info:'03-5454752125'

                    },
                    {   imgsrc:email,
                        title:'האימייל שלנו',
                        info:'contact@pitpitap.co.il'

                    },
                    {   imgsrc:facebook,
                        title:'הפייסבוק שלנו',
                        info:'#pitpitap page'

                    },


      ]

    return (
        <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>

<               GridContainer gridTemplateColumns= '1fr 2fr 1fr' gridTemplateRows= 'auto' gridGap= '0' margin='auto' height='10vh' width='30%' padding='20rem 50rem'> 
                <Image src={fill_one} margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Text fontSize='45rem' fontFamily='RoundedMplus1c-Medium' margin='auto'>צרו קשר</Text>
                <Image src={fill_one} margin='auto' />
                
               </GridContainer>
                <GridContainer gridTemplateColumns= 'repeat(3, 1fr)' gridTemplateRows= '1fr' gridGap= '3%' margin='2vh'  width='50vw' height='35vh' marginTop='50rem'>


                {
                   items.map((item, index) => (

                    <div>
                            <Image src={item.imgsrc} height='17vh'margin='auto'/>
                            <Text fontSize='25rem' fontFamily='RoundedMplus1c-ExtraBold' margin='auto' fontWeight='bold' padding='5rem'>{item.title}</Text>
                            <Text fontSize='20rem' fontFamily='RoundedMplus1c-Regular' margin='auto'>{item.info}</Text>

                    </div>

                   ))
               }
              
                     </GridContainer>   
                     <GridContainer gridTemplateColumns= '1fr' gridTemplateRows= '1fr 1fr' gridGap= '0' margin='auto' marginTop='130rem'>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);