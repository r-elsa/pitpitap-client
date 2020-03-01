import { createGlobalStyle  } from 'styled-components';

import Rounded1c_Black from '../assets/fonts/MPLUSRounded1c-Black.ttf';
import MPLUSRounded1c_Thin from'../assets/fonts/MPLUSRounded1c-Thin.ttf'
import MPLUS1p_Black from '../assets/fonts/MPLUS1p-Black.ttf'
import MPLUS1p_Bold from '../assets/fonts/MPLUS1p-Bold.ttf'

import MPLUS1p_ExtraBold from '../assets/fonts/MPLUS1p-ExtraBold.ttf'
import MPLUS1p_Light from'../assets/fonts/MPLUS1p-Light.ttf'
import MPLUS1p_Medium from '../assets/fonts/MPLUS1p-Medium.ttf'
import MPLUS1p_Regular from '../assets/fonts/MPLUS1p-Regular.ttf'
import MPLUS1p_Thin from '../assets/fonts/MPLUS1p-Thin.ttf'

import Rounded1c_Bold from '../assets/fonts/MPLUSRounded1c-Bold.ttf'
import Rounded1c_ExtraBold from  '../assets/fonts/MPLUSRounded1c-ExtraBold.ttf'
import Rounded1c_Light from '../assets/fonts/MPLUSRounded1c-Light.ttf'
import Rounded1c_Medium from '../assets/fonts/MPLUSRounded1c-Medium.ttf'
import Rounded1c_Regular from '../assets/fonts/MPLUSRounded1c-Regular.ttf'
import Rounded1c_Thin from '../assets/fonts/MPLUSRounded1c-Thin.ttf'


export const GlobalStyle = createGlobalStyle`


  @font-face {
    font-family: 'Rounded1c_Regular';
    src: url(${Rounded1c_Regular}) format("truetype");
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0px;
    color: #54637a;
  }

  @font-face {
    font-family: 'Rounded1c_Black';
    src: url(${Rounded1c_Black}) format("truetype");
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
   /*  color: #54637a; */
    letter-spacing: 1px;
  
  }


  @font-face {
    font-family: 'Rounded1c_Medium';
    src: url(${Rounded1c_Medium}) format("truetype");
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
/*     color: #414d5e; */
    letter-spacing: 1px;
   
  }
  @font-face {
    font-family: 'Rounded1c_Bold';
    src: url(${Rounded1c_Bold}) format("truetype");
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0px;
   /*  color: #54637a; */
    
  }
  @font-face {
    font-family: 'Rounded1c_ExtraBold';
    src: url(${Rounded1c_ExtraBold}) format("truetype");
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0px;
    text-align: center;
    /*  color: #54637a; */
    
    }


  body{
      font-family:'Rounded1c_Regular'
  }
`;

	

