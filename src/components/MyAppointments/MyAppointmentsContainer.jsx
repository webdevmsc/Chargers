import {connect} from "react-redux";
import React from 'react';
import MyAppointments from "./MyAppointments";
import {cancelSession, getSessions} from "../../redux/sessions-reducer";

const MyAppointmentsContainer = React.memo((props) => {
    return (
        <MyAppointments { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions.sessions,
        user: state.auth.user
    };
}


export default connect(mapStateToProps, { getSessions, cancelSession })(MyAppointmentsContainer);
