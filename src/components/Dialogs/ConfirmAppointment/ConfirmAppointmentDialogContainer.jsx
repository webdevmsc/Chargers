import {connect} from "react-redux";
import React from 'react';
import ConfirmAppointmentDialog from "./ConfirmAppointmentDialog";

const ConfirmAppointmentDialogContainer = React.memo((props) => {
    return (
        <ConfirmAppointmentDialog { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(ConfirmAppointmentDialogContainer);
