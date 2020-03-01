
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';
import cat_ic from '../../assets/images/home-animal.svg';
import car_ic from '../../assets/images/cars.svg';
import home_ic from '../../assets/images/home.svg';
import music_ic from '../../assets/images/music.svg';
import wild_animal_ic from '../../assets/images/wild-animal.svg';
import outside_ic from '../../assets/images/outside.svg';
import food from '../../assets/images/food.svg';
import AnimalCards from '../../components/AnimalCards'
import PromoPage from '../../components/PromoPage'
import { backgroundColor } from 'styled-system';
import fill_one from  '../../assets/images/fill-1.png';


const PlayNowPage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [play, setPlay] = useState(true)
    const [active, setActive] = useState('')
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        
    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }

      }, [])


      const items = [

        {
           
            imgsrc: cat_ic,
            name:'חיות משק'
            
            },
            {
              
              imgsrc:car_ic,
              name:'כלי תחבורה'
              
          },
            {
                
              imgsrc:home_ic,
              name:'בבית שלי'
              
          },
            {
                  
              imgsrc:music_ic,
              name:'כלי נגינה'
              
          },
            {
                    
              imgsrc:wild_animal_ic,
              name:'חיות טבע'
              
          },
          {
                    
            imgsrc:outside_ic,
            name:'מחוץ לבית'
            
          },
          {
                    
            imgsrc:food,
            name:'אוכל'
            
          }
        ]
              
        const handleClick = (i)=>{
          setActive(i)     
         
             
          {i === 0 ? (
            setPlay(true)
            
          ) : (
            setPlay(false)
          )}
          setActive(i)
          
        }

const isMobile = width < 800
        
    return (
        <FlexContainer flexDirection='column' alignItems='center'>
         
                { width < '800' && 

                <GridContainer gridTemplateColumns= '1fr 3fr 1fr' gridTemplateRows= 'auto' gridGap= '0' margin='auto'height='5vh' width= {['70%','60%']} padding= '10rem 15rem'>
                <Image src={fill_one} width='100%' margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Text fontSize= '35rem'  fontFamily='Rounded1c_Medium' margin='auto'>שחקו עכשיו</Text>
                <Image src={fill_one} width='100%'margin='auto' />
                </GridContainer>
                }

          

         <GridContainer className = {isMobile ? 'scrollbar' : ''} gridTemplateColumns= 'repeat(7, 1fr)' gridTemplateRows= '1fr' gridGap= {['50rem', '0']} marginTop={['20rem','15rem']} width={['95vw', '50vw']} height = {['15vh', '16vh']}>
             
                {
                   items.map((item, index) => (
                    <span key={index} onClick ={() =>  handleClick(index)}>
                        <Image src={item.imgsrc} background={active == index ? 'white': 'transparent'} height= {['67rem', '7vh']} borderRadius='40rem' margin='auto' style = {{cursor:'pointer'}} />    
                       
                          }
                            <Text fontSize= {['15rem','20rem']} fontFamily ={active == index ? 'Rounded1c_Black': 'Rounded1c_Regular'} margin='auto'>{item.name}</Text>
                            <div style= {{height:'1px', bg:'red', width:'80%'}}></div>
                    </span>

                   ))
               }

           
                                 
                  </GridContainer>  }
               
              { play ?  <AnimalCards /> : <PromoPage /> }
             
                

              

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

export default connect(mapStateToProps, mapDispatchToProps)(PlayNowPage);

