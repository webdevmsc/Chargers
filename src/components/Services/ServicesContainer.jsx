import {connect} from "react-redux";
import React from 'react';
import Services from "./Services";

const ServicesContainer = React.memo((props) => {
    return (
        <Services { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(ServicesContainer);
