
import React, { useState, useEffect, useRef } from 'react';
import { FlexContainer} from './common';
import {ItemUnderLine, Question, Answer, Text} from '../components/ExpanelContainer'

import { ReactComponent as PlusIcon } from '../assets/images/plus.svg'
import { ReactComponent as MinusIcon } from '../assets/images/minus.svg'



const items = [{
                q:'לאיזה גילאים מיועד פיטפיטאפ?',
                a:'פיטפיטאפ מיועד לגילאי הגיל הרך: מגיל שנה עד 4, אך כמובן שהוא גם משחק לכל בני המשפחה.'
              },{
                q:'איך ניתן לשלם על מנוי בפיטפיטאפ?',
                a:'This is the answer'
              },{
                q:'איך עושים מנוי בפיטפיטאפ?',
                a:'This is the answer'
              },{
                q:'כמה אוספים ניתן להעלאות?',
                a:'This is the answer'
              },{
                q:'איך ניתן לבטל מנוי?',
                a:'This is the answer'
              },{
                q:'לאן הכסף של התרומה הולך?',
                a:'This is the answer'
              }]



              
function ExPanel() {
 /*  const classes = useStyles();
 */
 
  const [active, setActive]= useState([])
  
  const handleClick = (index)=>{

    setActive(index)

  }

  const handleClose =(index) =>{
    setActive(false)

  }


 /* 
  const [active, setActive]= useState([
    { question: '0', open: false },
    { question: '1', open: false },
    { question: '2', open: false },
    { question: '3', open: false },
    { question: '4', open: false },
    { question: '5', open: false },
  ])
    
    const handleClick = index => {
      const update = [...active, {'question':index}]
        update[index].open = true
        setActive(update);
      };
      


 */

                        
  return (

      <div>
           {items.map((item, index) => (
             <div key = {index} style={{alignItems:'right', margin:'auto'}}>
                <Question  padding={['15rem 0rem 15rem 0','10rem 0rem 10rem 0']}> {active === index ?  <MinusIcon style = {{cursor:'pointer', margin:'auto 0'}}  onClick={()=> handleClose(index)}/> : <PlusIcon style = {{cursor:'pointer', margin:'auto 0'}} marginTop='5rem' onClick={()=> handleClick(index)}/>} 
                <Text alignItems='right' fontSize={['24rem','25rem']} fontFamily='Rounded1c_Bold' padding={['0rem 15rem 0rem 0rem','0rem 10rem 0rem 0rem']} >{item.q}</Text></Question>
                <Answer className = {active === index ?'answer': ''}><Text fontSize={['20rem','20rem']} fontFamily='Rounded1c_Regular' padding={['0rem 55rem 15rem 15rem','0rem 40rem 10rem 10rem']} >{item.a}</Text></Answer>
                <ItemUnderLine />
           </div>
           ))}
     
      </div>

);
}
export default ExPanel






   /*  <div className={classes.root}>
    {items.map((item, index) => (
      <ExpansionPanel key = {index} style = {{backgroundColor:'transparent', boxShadow:'none', margin:'none'} }>
      <ExpansionPanelSummary

        style={{ padding:'none', margin:'none' }}
        expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
        id= {index}
      >
        <Typography className={classes.heading} style={{fontSize:'18px', boxShadow:'none', color:'#54637a'}}>{item.q}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails  style={{ padding:'0 0', }}>
        <Typography style={{fontSize:'10px', boxShadow:'none',   color:'#54637a'}}>
          {item.a}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>


    )
    )}   
    </div> */
 