import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {Button, Chip, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    map: {
        width: '100%'
    },
    list: {
        width: '300px',
        marginRight: '15px'
    },
    listItem: {
        padding: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        transitionDuration: '0.3s',
        borderRadius: '10px',
        cursor: 'pointer',
        marginBottom: '10px'
    },
    listItemTitle: {
        fontWeight: 'lighter'
    },
    address: {
        fontSize: '14px'
    },
    info: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 2,
        width: '300px',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '15px'
    },
    phone: {
        color: 'inherit',
        fontSize: '14px',
    },
    active: {
        backgroundColor: 'rgba(28,70,231,0.82)',
        color: 'white'
    },
    availableDate: {
        display: 'flex',
        alignItems: 'center',
        margin: '15px 0',
        justifyContent: 'space-between'
    },
    chip: {
        borderRadius: '6px',
        border: '8px',
        marginLeft: '15px',
        width: '150px'
    },
    book: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'green'
        }
    },
    unavailable: {
        color: 'grey',
        textDecoration: 'line-through'
    }
}))

const chargers = [
    {
        id: '1',
        title: 'Charger 1',
        address: 'ул. Макатаева, 117 (корпус "А"), уг. ул. Масанчи, Бизнес-центр "Lotos"',
        coordinate: [43.263173, 76.928092],
        phone: '+7 777 777 77 77',
        availableDates: [
            {
                start: '09:00',
                end: '10:00',
                available: true
            },
            {
                start: '10:00',
                end: '11:00',
                available: false
            },
            {
                start: '11:00',
                end: '12:00',
                available: true
            },
            {
                start: '12:00',
                end: '13:00',
                available: true
            },
            {
                start: '13:00',
                end: '14:00',
                available: false
            },
            {
                start: '14:00',
                end: '15:00',
                available: false
            },
            {
                start: '15:00',
                end: '16:00',
                available: true
            },
            {
                start: '16:00',
                end: '17:00',
                available: true
            }
        ]
    },
    {
        id: '2',
        title: 'Charger 2',
        address: 'пр. Райымбека, 101 (угол ул. Кунаева)',
        coordinate: [43.270991, 76.946804],
        phone: '+7 777 777 77 77',
        availableDates: [
            {
                start: '09:00',
                end: '10:00',
                available: false
            },
            {
                start: '10:00',
                end: '11:00',
                available: true
            },
            {
                start: '11:00',
                end: '12:00',
                available: true
            },
            {
                start: '12:00',
                end: '13:00',
                available: true
            },
            {
                start: '13:00',
                end: '14:00',
                available: true
            },
            {
                start: '14:00',
                end: '15:00',
                available: true
            },
            {
                start: '15:00',
                end: '16:00',
                available: false
            },
            {
                start: '16:00',
                end: '17:00',
                available: true
            }
        ]
    },
    {
        id: '3',
        title: 'Charger 3',
        address: 'ул. Муканова 245, уг. Абая',
        coordinate: [43.241951, 76.915542],
        phone: '+7 777 777 77 77',
        availableDates: [
            {
                start: '09:00',
                end: '10:00',
                available: false
            },
            {
                start: '10:00',
                end: '11:00',
                available: false
            },
            {
                start: '11:00',
                end: '12:00',
                available: false
            },
            {
                start: '12:00',
                end: '13:00',
                available: true
            },
            {
                start: '13:00',
                end: '14:00',
                available: true
            },
            {
                start: '14:00',
                end: '15:00',
                available: false
            },
            {
                start: '15:00',
                end: '16:00',
                available: true
            },
            {
                start: '16:00',
                end: '17:00',
                available: true
            }
        ]
    },
    {
        id: '4',
        title: 'Charger 4',
        address: 'ул. Розыбакиева, 275',
        coordinate: [43.198578, 76.893165],
        phone: '+7 777 777 77 77',
        availableDates: [
            {
                start: '09:00',
                end: '10:00',
                available: false
            },
            {
                start: '10:00',
                end: '11:00',
                available: false
            },
            {
                start: '11:00',
                end: '12:00',
                available: false
            },
            {
                start: '12:00',
                end: '13:00',
                available: false
            },
            {
                start: '13:00',
                end: '14:00',
                available: false
            },
            {
                start: '14:00',
                end: '15:00',
                available: false
            },
            {
                start: '15:00',
                end: '16:00',
                available: true
            },
            {
                start: '16:00',
                end: '17:00',
                available: false
            }
        ]
    },
    {
        id: '5',
        title: 'Charger 5',
        address: 'пр. Абая 109B, уг. Ауэзова',
        coordinate: [43.240381, 76.905733],
        phone: '+7 777 777 77 77',
        availableDates: [
            {
                start: '09:00',
                end: '10:00',
                available: false
            },
            {
                start: '10:00',
                end: '11:00',
                available: false
            },
            {
                start: '11:00',
                end: '12:00',
                available: true
            },
            {
                start: '12:00',
                end: '13:00',
                available: true
            },
            {
                start: '13:00',
                end: '14:00',
                available: true
            },
            {
                start: '14:00',
                end: '15:00',
                available: true
            },
            {
                start: '15:00',
                end: '16:00',
                available: true
            },
            {
                start: '16:00',
                end: '17:00',
                available: true
            }
        ]
    },
]

const ChargesMap = () => {
    const styles = useStyles();
    const [charge, setCharge] = useState(null)
    const parseAvailable = (available) => {
        if (available === false) return 'Занято'
        else return 'Доступно'
    }
    return (
        <Grid container>
            <Grid xs={3}>
                <div className={styles.list}>
                    {chargers.map(x =>
                        <div onMouseOver={() => setCharge(x)}
                             className={clsx({[styles.active]: charge != null && charge.id === x.id}, styles.listItem)}>
                            <Typography className={styles.listItemTitle}>{x.title}</Typography>
                            <Typography className={styles.address}>{x.address}</Typography>
                            <Typography><a className={styles.phone} href="tel:+7 777 777 77 77">+7 777 777 77
                                77</a></Typography>
                        </div>
                    )}
                </div>
            </Grid>
            <Grid xs={9}>
                <YMaps>
                    <div style={{position: 'relative'}}>
                        {
                            charge != null &&
                            <div className={styles.info}>
                                <Typography className={styles.listItemTitle}>{charge.title}</Typography>
                                <Typography className={styles.address}>{charge.address}</Typography>
                                <Typography><a className={styles.phone} href="tel:+7 777 777 77 77">+7 777 777 77
                                    77</a></Typography>
                                <div>
                                    { charge.availableDates.map(x =>
                                        <div className={styles.availableDate}>
                                            <Typography className={clsx({ [styles.unavailable]: !x.available })}>{x.start} - {x.end}</Typography>
                                            { x.available && <Button size={'small'} variant={'contained'} className={styles.book}>Забронировать</Button> }
                                        </div>
                                    )}
                                </div>
                            </div>
                        }

                        <Map width={'100%'} height={'700px'} defaultState={{center: [43.237793, 76.945690], zoom: 12}}>
                            {chargers.map(x =>
                                <div>
                                    <Placemark onHover={() => setCharge(x)} properties={{balloonContentBody: '1233123'}}
                                               options={{iconColor: charge != null && charge.id === x.id ? 'blue' : 'black'}}
                                               geometry={x.coordinate}/>
                                </div>
                            )}
                        </Map>
                    </div>
                </YMaps>
            </Grid>
        </Grid>
    )
}

export default ChargesMap;