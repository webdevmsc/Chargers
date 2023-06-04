import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main";
import {makeStyles} from "@material-ui/core";
import * as React from 'react'
import {connect, Provider} from "react-redux";
import MainContainer from "./components/Main/MainContainer";
import store from "./redux/redux-store";
import {BrowserRouter, HashRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({

}))

const App = React.memo(({}) => {

    let styles = useStyles();

    return (
        <MainContainer/>
    )
})

const mapStateToProps = (state) => {
    return {

    }
}

let AppContainer = connect(mapStateToProps, { })(App);

let Application = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppContainer/>
            </HashRouter>
        </Provider>
    )
}


export default Application;
