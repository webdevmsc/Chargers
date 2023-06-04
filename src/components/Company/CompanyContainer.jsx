import {connect} from "react-redux";
import React from 'react';
import Company from "./Company";
const CompanyContainer = React.memo((props) => {
    return (
        <Company { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(CompanyContainer);
