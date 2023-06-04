import {AppBar, Avatar, Container, makeStyles, Tooltip, Typography} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
    },
    leftBlock: {
        display: 'flex',
    },
    rightBlock: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginRight: '15px'
    }

}))

const links = [
    {
        to: '/',
        label: 'Главная страница'
    }
]

const Header = ({ user }) => {
    const getFullName = (user) => {
        return `${user.surname} ${user.firstName} ${user.fatherName}`
    }
    const styles = useStyles();
    return (
        <AppBar>
            <Container>
                <div className={styles.header}>
                    <div className={styles.leftBlock}>
                        <Typography variant={'h4'}>ChargesMap</Typography>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
                            {links.map(x =>
                                <NavLink className={styles.link} to={x.to}><Typography>{x.label}</Typography></NavLink>
                            )}
                        </div>
                    </div>
                    <div className={styles.rightBlock}>
                        <div style={{ display: 'flex', marginRight: '15px' }}>
                            <LocationOnIcon/>
                            <Typography>Almaty</Typography>
                            <ExpandMoreIcon/>
                        </div>
                        <div style={{ display: 'flex', marginRight: '15px' }}>
                            <Typography>RU</Typography>
                            <ExpandMoreIcon/>
                        </div>
                        <Tooltip title={<Typography>{getFullName(user)}</Typography>}><Avatar/></Tooltip>
                    </div>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header;