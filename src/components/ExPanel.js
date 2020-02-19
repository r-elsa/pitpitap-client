import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color:'#54637a',
    padding:'0 0' 
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  

  
    
  },
}));

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
  const classes = useStyles();

 
  
  return (
    <div className={classes.root}>
    {items.map((item, index) => (
      <ExpansionPanel style = {{backgroundColor:'transparent', boxShadow:'none', margin:'none'} }>
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
    </div>
  );
}
export default ExPanel