import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';
import bear_1 from '../../assets/images/bear-1.png';
import bear_2 from '../../assets/images/bear-2.png';
import bear_3 from '../../assets/images/bear-3.png';
import bear_4 from '../../assets/images/bear-4.png';
import bear_5 from '../../assets/images/bear-5.png';
import bear_6 from '../../assets/images/bear-6.png';
import bear_7 from '../../assets/images/bear-7.png';
import bear_8 from '../../assets/images/bear-8.png';
import fill_one from '../../assets/images/fill-1.png';



const WhoWeArePage = props => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [variable, setVariable] = useState(props.initialValue)


    // this function will call every time that that prop someValue will change,
    // if you leave that array empty so it will call only after the render of the componenet
    useEffect(() => {
        // some stuff :)
         
      }, [])


    const items = [
            {
                name:'',
                imgsrc:'',
                job:''
            },
            {
                name:'פז דוידוביץ',
                imgsrc:bear_1,
                job:'מייסדת פיטפיטאפ'
            },
            {
                name:'ניר גורלי',
                imgsrc:bear_2,
                job:'מייסד פיטפיטאפ'
            },
            {
                name:'עודד ששון',
                imgsrc:bear_3,
                job:'מייסד פיטפיטאפ'
            },
            {
                name:'',
                imgsrc:'',
                job:''
            },
            {
                name:'נטע נחמיאס',
                imgsrc:bear_8,
                job:'מעצבת'
            },
            {
                name:'אלון מיטלמן',
                imgsrc:bear_7,
                job:'מתכנת'
            },
            {
                name:'דור צפריר',
                imgsrc:bear_6,
                job:'מתכנת'
            },
            {
                name:'אלזה ריינאן',
                imgsrc:bear_4,
                job:'מתכנתת'
            },
            {
                name:'שירן גולברי',
                imgsrc:bear_5,
                job:'מעצבת'
            },
     
         
         





    ]

    return (
        <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>

        <GridContainer gridTemplateColumns= '1fr 2fr 1fr' gridTemplateRows= 'auto' gridGap= '0' margin='auto' height='10vh' width='35%' paddingTop='20rem'> 
                <Image src={fill_one} margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Text fontSize='45rem' fontFamily='RoundedMplus1c-Medium' margin='auto'>צוות פיטפיטאפ</Text>
                <Image src={fill_one} margin='auto' />
                
               </GridContainer>




               <FlexContainer width='30vw'> 

                <Text fontSize='22rem' fontFamily='RoundedMplus1c-Regular' margin='18rem 0rem 18rem 0rem'  lineHeight= '1.6'>הצוות שלנו משלב בתוכו שותפים מעולם הטכנולוגיה והקרייאטיב שיצרו
                                            באהבה עבור הילדים שלהם ושלכם את השילוב של משחק עם
                                            גלריית תמונות משפחתית וקטגוריות נוספות מעולם הילדים
                                            כך שילדנו יהנו מחוויה כייפית מוגנת ומלמדת</Text>

                 </FlexContainer > 
                 
                <GridContainer gridTemplateColumns= 'repeat(5, 1fr)' gridTemplateRows= '1fr 1fr' gridGap= '60rem' margin='65rem auto'  >
               
               {
                   items.map((item, index) => (

                    <div>
                            <Image src={item.imgsrc} height='15vh'margin='auto'/>
                            <Text fontSize='22rem' fontFamily='RoundedMplus1c-ExtraBold' fontWeight= 'bold' padding='5rem' margin='auto'>{item.name}</Text>
                            <Text fontSize='15rem' fontFamily='RoundedMplus1c-Regular' margin='auto'>{item.job}</Text>

                    </div>

                   ))
               }
               
              
        
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

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeArePage);