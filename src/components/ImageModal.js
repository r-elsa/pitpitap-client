import React, { useState } from 'react';
import {Modal, Button } from './common/Modal'


const ImageModal = props => {

    const {show, closeModal, activeCard } = props;

    return (
        <>


        <Modal background ={activeCard} className={show ? "modal" : "hide"}>
            <Button onClick ={closeModal}>X</Button>
        
        </Modal>


      {/*   #overlay {
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  display:none;
  background-color:#000;
  opacity:0.5; */}
}




        </>
    );
}


export default ImageModal
/* const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
    exampleFunctionToDispatch: data => dispatch(()=>(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent); */
