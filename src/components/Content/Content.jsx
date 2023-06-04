import {Route, Switch as RouteSwitch} from "react-router-dom";
import {Container, makeStyles, Snackbar, Typography} from "@material-ui/core";
import {withSuspense} from "../../HOC/withSuspense";
import CompaniesContainer from "../Companies/CompaniesContainer";
import SubscriptionsContainer from "../Subscriptions/SubscriptionsContainer";
import ServicesContainer from "../Services/ServicesContainer";
import StartPageContainer from "../StartPage/StartPageContainer";
import CompanyContainer from "../Company/CompanyContainer";
import MyAppointmentsContainer from "../MyAppointments/MyAppointmentsContainer";
import ScannerContainer from "../Scanner/ScannerContainer";
import {Alert} from "@material-ui/lab";
import ChargesMapContainer from "../Map/ChargesMapContainer";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: '120px'
    }
}))

const Content = ({ success, handleSuccess }) => {
    const styles = useStyles();
    return (
        <Container className={styles.content}>
            <RouteSwitch>
                <Route exact path={'/companies/:id'} render={withSuspense(CompanyContainer)}/>
                <Route path={'/companies'} render={withSuspense(CompaniesContainer)}/>
                <Route path={'/map'} render={withSuspense(ChargesMapContainer)}/>
                <Route path={'/myAppointments'} render={withSuspense(MyAppointmentsContainer)}/>
                <Route path={'/scanner'} render={withSuspense(ScannerContainer)}/>
                <Route path={'/subscriptions'} render={withSuspense(SubscriptionsContainer)}/>
                <Route path={'/services'} render={withSuspense(ServicesContainer)}/>
                <Route path={'/'} render={withSuspense(ChargesMapContainer)}/>
            </RouteSwitch>
            <Snackbar open={success} autoHideDuration={2000} onClose={() => handleSuccess(false)}>
                <Alert variant={'filled'} onClose={() => handleSuccess(false)} severity="success">
                    Запись подтверждена!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Content;