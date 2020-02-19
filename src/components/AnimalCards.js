
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import butterfly from '../assets/images/butterfly.png';
import butterfly_img from '../assets/images/vivek-doshi-pn-xnfta-6-4-unsplash.png'
import dog from '../assets/images/dog.png';
import chiken from '../assets/images/chiken.png';
import pig from '../assets/images/pig.png';
import bunny from '../assets/images/bunny.png';
import fish from '../assets/images/fish.png';
import turtle from '../assets/images/turtle.png';
import cow from '../assets/images/cow.png';
import cat from '../assets/images/cat.png';
import sheep from '../assets/images/sheep.png';
import bird from '../assets/images/bird.png';
import horse from '../assets/images/horse.png';
import { Card, FlexContainer, Text, AbsoluteContainer, GridContainer, Image } from '../components/common';
import ImageModal from './ImageModal'


const AnimalCards = () => {

    const [show, setShow] = useState(false)
    const [activeCard, setActiveCard] = useState('')
    const openModal = ()=> setShow(true)
    const closeModal = ()=> setShow(false)

    const [cards, setCards] = useState([

        {
            animal: butterfly,
            pic_url: butterfly_img
        },
    
        {
            animal: dog,
            pic_url: ''
        },
    
        {
            animal: chiken,
            pic_url: ''
        },
    
        {
            animal: pig,
            pic_url: ''
        },
    
        {
            animal: bunny,
            pic_url: ''
        },
    
        {
            animal: fish,
            pic_url: ''
        },
    
        {
            animal: turtle,
            pic_url: ''
        },
    
        {
            animal: cow,
            pic_url: ''
        },
    
        {
            animal: cat,
            pic_url: ''
        },
    
        {
            animal: sheep,
            pic_url: ''
        }
        ,
    
        {
            animal: bird,
            pic_url: ''
        }
        ,
    
        {
            animal: horse,
            pic_url: ''
        }
    ]);

     /* useEffect(() => {
        setCards(cards)
       
  
      }, [cards]);  */


      const handleModal= (picture) => {
          console.log(picture)
         setActiveCard(picture)
          openModal()


      }
  
   
        return (
         <GridContainer gridTemplateColumns= 'repeat(4, 1fr)' gridTemplateRows='repeat(3, 1fr)' gridGap= '1vw' margin='auto'>
             

         {cards.map((card,index) => (   
         <Image key={index} src={card.animal} height='18vh'margin='auto' onClick= {() => handleModal(card.pic_url)}/>
       

    ))}  
      <ImageModal closeModal={closeModal} show={show} activeCard={activeCard}></ImageModal>
                </GridContainer>
           
     )
      
   

}
export default AnimalCards

/* const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalCards);
 */















