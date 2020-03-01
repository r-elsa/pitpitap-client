import React, { Component } from "react";
 import ReactDOM from "react-dom";
 import  ScrollMenu from "react-horizontal-scrolling-menu";

 
 
 const list = [
   { name: "item1" },
   { name: "item2" },
   { name: "item3" },
   { name: "item4" },
   { name: "item5" },
   { name: "item6" },
   { name: "item7" },
   { name: "item8" },
 
 ];
  

 
 export const Menu = list =>
   list.map(el => {
     

     return <div style={{margin:'20px', fontSize:'20px'}} text={el.name} key={el.name}>{el.name}</div>;
   });
 
 
 class MobileScroll extends Component {
   state = {
     selected: "item1",
 
   };
 
   constructor(props) {
     super(props);
     this.menu = null;
     this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
   }
 

   onSelect = key => {
    
     this.setState({ selected: key });
   
   };
 

   render() {
      const {

       selected
     } = this.state;
 
     const menu = this.menuItems;
 
 
     return (

        
 <div style={{ display:'block', width:'100vw', height:'10vh', fontSize:'20px'}}> 
            
            <ScrollMenu 
           ref={el => (this.menu = el)}
           data={menu}
          onSelect={this.onSelect} 
           selected={selected} 
         />
    </div> 
    
       
        
    
     );
   }
 }
 
 export default MobileScroll;
 
 
               