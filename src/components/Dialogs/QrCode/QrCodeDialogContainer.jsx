import {connect} from "react-redux";
import React from 'react';
import QrCodeDialog from "./QrCodeDialog";

const QrCodeDialogContainer = React.memo((props) => {
    return (
        <QrCodeDialog { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
}


export default connect(mapStateToProps, { })(QrCodeDialogContainer);
