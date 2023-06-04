import {connect} from "react-redux";
import React from 'react';
import Scanner from "./Scanner";
import {confirmSession} from "../../redux/sessions-reducer";
import {handleSuccess} from "../../redux/common-reducer";

const ScannerContainer = React.memo((props) => {
    return (
        <Scanner { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { confirmSession, handleSuccess })(ScannerContainer);
