

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, GridContainer, Image } from '../../components/common';
import { userActions } from '../../store/user/actions';
import illustartion from '../../assets/images/illustration.png';
import   ExPanel  from '../../components/ExPanel'
import fill_one from  '../../assets/images/fill-1.png';
import appleicon from '../../assets/images/app-store-badge-us-black.png';
import google_icon from '../../assets/images/google-play-badge-us.png';
import Download from '../../components/Download'

import axios from 'axios';




const QandApage = () => {

    // here you can set all the variabled that you want to use them as a state for this function
    const [items, setItems] = useState([]);

    const apiUrl = "https://pitpitap-server-staging.herokuapp.com/api/qandas";

//config.url


/*     const [showLoading, setShowLoading] = useState(true); */
   

    useEffect(() => {

        const fetchData = async () => {
       
         const result = await axios(apiUrl);
       
         setItems(result.data);
         console.log('INSIDE ',items)
       
      /*    setShowLoading(false); */
       
        };
       
        fetchData();
       
       }, []);
       

       console.log('OUTSIDE',items)



    return (
        <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>




            <GridContainer gridTemplateColumns= {[ '1fr 2fr 1fr','1fr 2fr 1fr']} gridTemplateRows= 'auto' gridGap= '0' margin='auto' height={['5vh','10vh']}  width= {['90vw', '45vw']} padding='20rem 0'> 
                <Image src={fill_one} width={['80%', '100%']} margin='auto' style = {{transform: 'rotate(180deg)'}} />
                <Text fontSize= {['35rem', '45rem']} fontFamily='Rounded1c_Medium' margin='auto'>שאלות ותשובות</Text>
                <Image src={fill_one} width={['80%', '100%']} margin='auto' />
                
               </GridContainer>

              
                <GridContainer gridTemplateColumns= {['1fr','1fr 1fr']} gridTemplateRows= 'auto' gridGap= {['10%','0%' ]}margin='10rem' width={['90%','60%']} height='40vh' >
               
                    <div><ExPanel items={items}/></div> 
                    <div style = {{ display:"inlineBlock"}}> <Image margin='auto' src={illustartion} height='45vh' margin='auto'/></div>
             
                
                     </GridContainer>   

                    <GridContainer gridTemplateColumns= '1fr' gridTemplateRows= '1fr 1fr' gridGap= '0' margin='auto' marginTop= {['560rem', '50rem']} marginBottom={['50rem', '0']} padding='30rem'>
                     <Text fontSize={['25rem','35rem' ]} fontFamily='Rounded1c_Bold'  margin='auto' >הורידו עכשיו</Text>

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

export default connect(mapStateToProps, mapDispatchToProps)(QandApage);