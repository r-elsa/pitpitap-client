
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text, AbsoluteContainer, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';

import cat_ic from '../../assets/images/home-animal.svg';
import car_ic from '../../assets/images/cars.png';
import home_ic from '../../assets/images/home.png';
import music_ic from '../../assets/images/music.png';
import wild_animal_ic from '../../assets/images/wild-animal.png';
import outside_ic from '../../assets/images/outside.png';
import food from '../../assets/images/food.png';
import AnimalCards from '../../components/AnimalCards'






const PlayNowPage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
        return 
      }, [props.somaValue])


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
              

    return (


        <FlexContainer height='100%' flexDirection='column' alignItems='center'>
           
              
         <GridContainer gridTemplateColumns= 'repeat(7, 1fr)' gridTemplateRows= '1fr' gridGap= '0' margin='5vh'  width='50vw' >


                {
                   items.map((item, index) => (

                    <div>
                            <Image src={item.imgsrc} height='7vh'margin='auto'/>
                            <Text fontSize='20rem' margin='auto'>{item.name}</Text>
  

                    </div>

                   ))
               }
                      
                    
                    
                  </GridContainer>  
               
                  <AnimalCards />
             
              

              

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
