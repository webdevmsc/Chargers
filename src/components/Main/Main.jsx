import {createTheme, ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from 'react-router-dom';
import HeaderContainer from "../Header/HeaderContainer";
import ContentContainer from "../Content/ContentContainer";

const theme = createTheme({

});

const Main = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <HeaderContainer/>
                <ContentContainer/>
            </ThemeProvider>
        </BrowserRouter>
    )
}


export default Main;