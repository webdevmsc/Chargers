import {Button, makeStyles, Typography} from "@material-ui/core";

const subscriptions = [
    {
        duration: 365,
        price: '175 000',
        freeze: 60
    },
    {
        duration: 90,
        price: '90 000',
        freeze: 30
    },
    {
        duration: 180,
        price: '145 000',
        freeze: 45
    },
    {
        duration: 730,
        price: '500 000',
        freeze: 90
    }
]

const useStyles = makeStyles(theme => ({
    subscriptions: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    subscription: {
        height: '300px',
        width: '200px',
        padding: '30px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(28,70,231,0.82)',
        color: 'white',
        borderRadius: '10px',
        cursor: 'pointer',
        marginRight: '15px',
    },
    duration: {
        fontSize: '72px',
        fontWeight: 'bold',
    },
    days: {
        fontSize: '30px',
        fontWeight: 'lighter'
    },
    freeze: {
        fontSize: '14px'
    },
    price: {
        marginTop: '15px',
        fontSize: '30px',
        fontWeight: 'bold'
    }
}))

const Subscriptions = () => {
    const styles = useStyles();
    return (
        <div className={styles.subscriptions}>
            {
                subscriptions.map(x =>
                    <div className={styles.subscription}>
                        <Typography className={styles.duration}>{x.duration}</Typography>
                        <Typography className={styles.days}>{x.duration} дней</Typography>
                        <Typography className={styles.freeze}>{x.freeze} дней заморозки</Typography>
                        <Typography className={styles.price}>{x.price}</Typography>
                        <Button style={{ color: 'white' }}>Купить</Button>
                    </div>
                )
            }
        </div>
    )
}

export default Subscriptions;