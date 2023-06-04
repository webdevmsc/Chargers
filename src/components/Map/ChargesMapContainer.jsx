import {connect} from "react-redux";
import React from 'react';
import ChargesMap from "./ChargesMap";

const ChargesMapContainer = React.memo((props) => {
    return (
        <ChargesMap { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(ChargesMapContainer);
