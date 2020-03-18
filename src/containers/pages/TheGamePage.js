import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image, SvgContainer} from '../../components/common'; 
import { userActions } from '../../store/user/actions';
import group_four from '../../assets/images/group-4.png';
import group_six from '../../assets/images/group-6.png';
import bigpitpitap from  '../../assets/images/pitpitap.png';
import fill_one from  '../../assets/images/fill-1.svg';
import SimpleSlider from '../../components/TheGamePage/Slider'
/* import defaultSlides from '../../components/TheGamePage/defaultSlides'; */
import Download from '../../components/Download'
import axios from 'axios'


const TheGamePage = ({breakpoint, renderMobile, renderDesktop}) => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [width, setWidth] = useState(window.innerWidth)
    
const [items, setItems] = useState([]);

const apiUrl = "https://pitpitap-server-staging.herokuapp.com/api/slides";


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {


      
    const fetchData = async () => {
   
      const result = await axios(apiUrl);
    
      setItems(result.data);
     /*  console.log('INSIDE ',items) */
    
   /*    setShowLoading(false); */
    
     };
            
    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    fetchData();
    window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
      }, [])

     

    const isMobile = width > 800

    return (
        isMobile ? (
        <FlexContainer flexDirection='column' alignItems='center'>


        <GridContainer gridTemplateColumns= 'repeat(3, 1fr)' gridTemplateRows= 'auto' gridGap= '8px' margin='auto' height='70vh' width='80vw'>

        <Image src={group_six} height='70vh' m='15rem auto' />
        <div style = {{paddingTop:'60rem'}}>
        <GridContainer gridTemplateColumns= '1fr 1fr 1fr' gridTemplateRows= 'auto' gridGap= '2vw' margin='auto' height='10vh' width='100%'> 
                <Image src={fill_one} height='30rem' margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Image src={bigpitpitap} height='55rem' margin='auto'/>
                <Image src={fill_one} height='30rem' margin='auto' />
                
               </GridContainer>
     
    
        <Text fontSize='27rem' fontFamily ='Rounded1c_Regular' marginBottom='15rem'>גלריית התמונות הראשונה שלי</Text>
        <Text fontSize='20rem'  fontFamily='Rounded1c_Regular'margin='10rem 20rem'   lineHeight= '1.6'>יצרנו עבור הילדים שלנו את גלריית התמונות הראשונה שלהם והחלטנו להביא אותה לעולם כדי שעוד מלא ילדים יוכלו להנות מחוויה כיפית, מוגנת, מלמדת ומקרבת למשפחה ולדברים שהקטנטנים שלנו הכי אוהבים להכיר ולגלות</Text>
        <Text fontSize='35rem' fontFamily='Rounded1c_Bold' padding='20rem 0 10rem 0'>הורידו עכשיו</Text>

        <Download/>
        
              <SimpleSlider slides={items} isMobile={isMobile}/></div>

    
        <Image src={group_four} height='70vh' m='15rem auto' />
          
        </GridContainer>
        <FlexContainer>
      
        </FlexContainer> 
         </FlexContainer> ): (

     


        <FlexContainer flexDirection='column' alignItems='center' padding = '50rem 0rem 0rem 0rem'>
         
        <Image src={bigpitpitap} height='55rem' margin='auto' padding = '10rem 10rem 10rem 10rem'/>
         <Image src={fill_one} margin='auto' padding = '10rem 10rem 10rem 10rem' />


        <Text fontSize='30rem' fontFamily ='Rounded1c_Regular' padding = '10rem 10rem 10rem 10rem'>גלריית התמונות הראשונה שלי</Text>
        <Text fontSize='25rem' fontFamily ='Rounded1c_Regular' padding = '10rem 30rem 10rem 30rem'   lineHeight= '1.6'>יצרנו עבור הילדים שלנו את גלריית התמונות הראשונה שלהם והחלטנו להביא אותה לעולם כדי שעוד מלא ילדים יוכלו להנות מחוויה כיפית, מוגנת, מלמדת ומקרבת למשפחה ולדברים שהקטנטנים שלנו הכי אוהבים להכיר ולגלות</Text>
       
      

                 <Text fontSize='35rem' fontFamily='Rounded1c_Bold' padding = '10rem 10rem 10rem 10rem'>הורידו עכשיו</Text>
             
                 <Download/>
            
 

        <Image src={group_four} height='65vh' m='auto'  padding = '40rem 10rem 10rem 10rem' />

        <SimpleSlider slides ={items} isMobile={isMobile}/>

      {/*   <Slider slides = {defaultSlides} margin='auto'/> */}

         </FlexContainer>

    
         ) 
        
        
        
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