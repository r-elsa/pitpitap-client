import React, { useState } from 'react';
import { connect } from 'react-redux';

const ExampleComponent = props => {

    const [variable, setVariable] = useState('initial value');

    return (
        <div className="example-container">
        
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({
    exampleFunctionToDispatch: data => dispatch(()=>(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
