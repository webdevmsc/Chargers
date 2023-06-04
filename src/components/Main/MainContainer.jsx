import {connect} from "react-redux";
import React from 'react';
import Main from "./Main";
import {Container} from "@material-ui/core";

const MainContainer = React.memo((props) => {
    return (
        <Main { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(MainContainer);
