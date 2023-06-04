import {connect} from "react-redux";
import React from 'react';
import Companies from "./Companies";

const CompaniesContainer = React.memo((props) => {
    return (
        <Companies { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(CompaniesContainer);
