// This file is the configurtion for all the styled system libarary
// For more information about the structure of this file go to https://styled-system.com/

const appBluesColors = ['#1581eb', '#044e98', '#0255a4', '#02386e', '#67b3ff'];
const appYelowColors = ['#ffdf1b', '#ffd700', '#ffc900'];
const appWhiteColors = ['#ffffff', '#ffffff'];
const appGreyColor = '#979797';
const appRedColor = '#ff3838';
const appBlackColor = '#000000';

const breakpoints = ['800px', '1600px']
// aliases
{/* <Box width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} /> */}



export const theme = {
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1rem',
    tight: '-0.05rem',
    mega: '0.25rem',
  },
  fonts: {
    /* heebo: "'Heebo', sans-serif",
    anton: "'Anton', sans-serif",
    raleway: "'Raleway', sans-serif",
    muli: "'Muli', sans-serif",
    serif: 'athelas, georgia, times, serif', */
  },
  borders: [0, '1px solid'],
  radii: [0, 2, 4, 16, 9999, '50%', '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    grey: appGreyColor,
    black: appBlackColor,
    blue: appBluesColors,
    yellow: appYelowColors,
    red: appRedColor,
    whites: appWhiteColors,
  },
  textStyles: {
    clickable: {
      cursor: 'pointer',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2rem'
    }
  },
  colorStyles: {
    emptyInput: {
      color: appGreyColor,
      borderColor: appGreyColor
    },
    errorInput: {
      color: appRedColor,
      borderColor: appRedColor
    },
    formBlueInput: {
      color: appBluesColors[2],
      backgroundColor: 'white',
      border: 'solid 1px',
      borderColor: appBluesColors[2]
    },
    activeInput: {
      color: '#4a90e2',
      borderColor: '#4a90e2'
    },
    whiteInput: {
      color: 'white',
      borderColor: 'white',
      backgroundColor: appBlackColor,
      '&::placeholder': {
        color: 'white'
      }
    },
/*     appContainer: {
      color: appBlackColor,
      backgroundColor: 'white'
    }, */
    blueContainer: {
      color: 'white',
      backgroundColor: appBluesColors[0]
    },
  },
  buttons: {
    login: {
      color: 'white',
      backgroundColor: appBluesColors[0],
      fontFamily: 'RoundedMplus1c',
      fontSize: '20rem',
      width: '273rem',
      height: '45rem',
      fontWeight: '500',
      borderRadius: '4rem',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    greyButton: {
      color: 'white',
      border: 'solid 1px white',
      backgroundColor: appGreyColor,
      '&:hover': {
        backgroundColor: 'rgba(42, 56, 144, 0.6)',
      },
    },
  },
};
