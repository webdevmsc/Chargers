import {connect} from "react-redux";
import React from 'react';
import Subscriptions from "./Subscriptions";

const SubscriptionsContainer = React.memo((props) => {
    return (
        <Subscriptions { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(SubscriptionsContainer);
