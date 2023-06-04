import {connect} from "react-redux";
import React from 'react';
import StartPage from "./StartPage";

const StartPageContainer = React.memo((props) => {
    return (
        <StartPage { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(StartPageContainer);
