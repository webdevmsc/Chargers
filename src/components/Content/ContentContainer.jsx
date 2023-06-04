import {connect} from "react-redux";
import React from 'react';
import Content from "./Content";
import {handleSuccess} from "../../redux/common-reducer";

const ContentContainer = React.memo((props) => {
    return (
        <Content { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        success: state.common.success
    };
}


export default connect(mapStateToProps, { handleSuccess })(ContentContainer);
