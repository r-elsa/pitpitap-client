const appHeaderColor = '#39b449';
const appBodyColor = 'rgba(247,146,28, 0.3)';
const appFooterColor = '#d91b5b';
const appBlueColor = '#2a3890';
const appGreyColor = '#979797';
const appBlackColor = '#000000';

const breakpoints = ['40em', '52em', '64em', '80em']
// aliases
{/* <Box width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} /> */}
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]


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
    heebo: "'Heebo', sans-serif",
    anton: "'Anton', sans-serif",
    raleway: "'Raleway', sans-serif",
    muli: "'Muli', sans-serif",
    serif: 'athelas, georgia, times, serif',
  },
  borders: [0, '1px solid'],
  radii: [0, 2, 4, 16, 9999, '50%', '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    header: appHeaderColor,
    main: appBodyColor,
    footer: appFooterColor,
    blue: appBlueColor,
    grey: appGreyColor,
    black: appBlackColor,
    whites: ['rgba(255,255,255,.7)', 'rgba(255,255,255,.4)','rgba(255,255,255,.125)'],
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
    appContainer: {
      color: appBlackColor,
      backgroundColor: 'white'
    },
    blueContainer: {
      color: 'white',
      backgroundColor: appBlueColor
    },
  },
  buttons: {
    login: {
      color: 'white',
      backgroundColor: appBlueColor,
      fontFamily: 'Raleway',
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
