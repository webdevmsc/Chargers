import {
    Chip,
    Container,
    Grid,
    makeStyles,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    Typography
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {useState} from "react";
import clsx from "clsx";
import ConfirmAppointmentDialogContainer from "../Dialogs/ConfirmAppointment/ConfirmAppointmentDialogContainer";
import {Alert} from "@material-ui/lab";

const company = {
    "id": "5aa27268-2503-458d-a50f-08db63a3342a",
    "title": "Маленький гений",
    "description": "Развивающие кружки для детей",
    "createdAt": "2023-06-03T01:54:40.2076773",
    "updatedAt": "2023-06-03T02:03:45.9700103"
}

const services = [
    {title: 'Шахматы'},
    {title: 'Ментальная математика'},
    {title: 'Рисование'},
]

const useStyles = makeStyles(theme => ({
    service: {
        padding: '15px',
        width: '180px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
        height: '60px',
        margin: '15px',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: 'rgba(28,70,231,0.82)',
            color: 'white'
        },
        cursor: 'pointer'
    },
    services: {
        display: 'flex',
        margin: '10px 0',
    },
    serviceInfo: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        padding: '15px'
    },
    chip: {
        marginLeft: '15px',
        borderRadius: '6px'
    },
    appointment: {
        padding: '15px',
        width: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
        height: '30px',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: 'rgba(28,70,231,0.82)',
            color: 'white'
        },
        cursor: 'pointer',
        margin: '15px'
    },
    appointments: {
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        transitionDuration: '0.3s'
    },
    currentAppointmentDate: {
        borderRadius: '10px',
        padding: '15px',
        transitionDuration: '0.3s'
    },
    currentAppointmentDateSlots: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        margin: '10px 0'
    },
    slot: {
        marginRight: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        width: '130px',
        padding: '15px',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: 'rgba(28,70,231,0.82)',
            color: 'white'
        },
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '14px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center'
    },
    time: {
        fontSize: '14px'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold'
    },
    description: {
        fontWeight: 'lighter',
        fontSize: '14px'
    },
    info: {
        margin: '10px 0',
        padding: '15px'
    },
    content: {
    },
    day: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    slotInfo: {
        padding: '15px',
        width: '250px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: 'rgba(28,70,231,0.82)',
            color: 'white'
        },
        borderRadius: '10px',
        cursor: 'pointer',
        marginRight: '15px',
    },
    active: {
        backgroundColor: 'rgba(28,70,231,0.82)'
    }
}))

const appointments = [
    {
        "day": 1,
        "appointmentDates": [
            {
                "date": "2023-06-05T00:00:00",
                "appointments": [
                    {
                        "id": "e53b61ae-5035-4f5f-7264-08db63a75beb",
                        "startDate": "2023-06-05T09:00:00",
                        "endDate": "2023-06-05T10:00:00",
                        "available": 20
                    },
                    {
                        "id": "3036a303-5737-4e24-7265-08db63a75beb",
                        "startDate": "2023-06-05T10:00:00",
                        "endDate": "2023-06-05T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "a32a57b2-b306-401a-7266-08db63a75beb",
                        "startDate": "2023-06-05T11:00:00",
                        "endDate": "2023-06-05T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-12T00:00:00",
                "appointments": [
                    {
                        "id": "2e3b637f-576c-4bd6-7273-08db63a75beb",
                        "startDate": "2023-06-12T09:00:00",
                        "endDate": "2023-06-12T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "781991a5-7373-4fdc-7274-08db63a75beb",
                        "startDate": "2023-06-12T10:00:00",
                        "endDate": "2023-06-12T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "ae950e35-fdad-47e5-7275-08db63a75beb",
                        "startDate": "2023-06-12T11:00:00",
                        "endDate": "2023-06-12T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-19T00:00:00",
                "appointments": [
                    {
                        "id": "455e05e8-12df-464a-7282-08db63a75beb",
                        "startDate": "2023-06-19T09:00:00",
                        "endDate": "2023-06-19T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "fe7f1c9d-c159-415a-7283-08db63a75beb",
                        "startDate": "2023-06-19T10:00:00",
                        "endDate": "2023-06-19T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "29c97df4-a312-43ae-7284-08db63a75beb",
                        "startDate": "2023-06-19T11:00:00",
                        "endDate": "2023-06-19T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-26T00:00:00",
                "appointments": [
                    {
                        "id": "916c5dc0-767f-4811-7291-08db63a75beb",
                        "startDate": "2023-06-26T09:00:00",
                        "endDate": "2023-06-26T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "85ae2c23-fa45-4997-7292-08db63a75beb",
                        "startDate": "2023-06-26T10:00:00",
                        "endDate": "2023-06-26T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "cae7d0ce-5227-46cd-7293-08db63a75beb",
                        "startDate": "2023-06-26T11:00:00",
                        "endDate": "2023-06-26T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            }
        ]
    },
    {
        "day": 2,
        "appointmentDates": [
            {
                "date": "2023-06-06T00:00:00",
                "appointments": [
                    {
                        "id": "68b72c80-5a1b-42f2-7267-08db63a75beb",
                        "startDate": "2023-06-06T09:00:00",
                        "endDate": "2023-06-06T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "1f6e7ce1-1cfb-470a-7268-08db63a75beb",
                        "startDate": "2023-06-06T10:00:00",
                        "endDate": "2023-06-06T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "42a86d29-fe94-457f-7269-08db63a75beb",
                        "startDate": "2023-06-06T11:00:00",
                        "endDate": "2023-06-06T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-13T00:00:00",
                "appointments": [
                    {
                        "id": "cd5618b1-dd17-455b-7276-08db63a75beb",
                        "startDate": "2023-06-13T09:00:00",
                        "endDate": "2023-06-13T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "fdbb580c-b358-4745-7277-08db63a75beb",
                        "startDate": "2023-06-13T10:00:00",
                        "endDate": "2023-06-13T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "6243a77d-a883-45cb-7278-08db63a75beb",
                        "startDate": "2023-06-13T11:00:00",
                        "endDate": "2023-06-13T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-20T00:00:00",
                "appointments": [
                    {
                        "id": "67be404b-d056-44df-7285-08db63a75beb",
                        "startDate": "2023-06-20T09:00:00",
                        "endDate": "2023-06-20T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "6a14703f-74bf-43bc-7286-08db63a75beb",
                        "startDate": "2023-06-20T10:00:00",
                        "endDate": "2023-06-20T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "578c3422-1d02-4148-7287-08db63a75beb",
                        "startDate": "2023-06-20T11:00:00",
                        "endDate": "2023-06-20T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-27T00:00:00",
                "appointments": [
                    {
                        "id": "6114db6b-37c5-40c4-7294-08db63a75beb",
                        "startDate": "2023-06-27T09:00:00",
                        "endDate": "2023-06-27T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "bedcfd03-6efc-4f7e-7295-08db63a75beb",
                        "startDate": "2023-06-27T10:00:00",
                        "endDate": "2023-06-27T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "81e50a45-2d58-4a9d-7296-08db63a75beb",
                        "startDate": "2023-06-27T11:00:00",
                        "endDate": "2023-06-27T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            }
        ]
    },
    {
        "day": 3,
        "appointmentDates": [
            {
                "date": "2023-06-07T00:00:00",
                "appointments": [
                    {
                        "id": "557718fc-c389-4cdf-726a-08db63a75beb",
                        "startDate": "2023-06-07T09:00:00",
                        "endDate": "2023-06-07T10:00:00",
                        "available": 15
                    },
                    {
                        "id": "6e528e54-6f49-4cac-726b-08db63a75beb",
                        "startDate": "2023-06-07T10:00:00",
                        "endDate": "2023-06-07T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "f9ada42d-1bde-4bc0-726c-08db63a75beb",
                        "startDate": "2023-06-07T11:00:00",
                        "endDate": "2023-06-07T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-14T00:00:00",
                "appointments": [
                    {
                        "id": "0cfb42e2-2d78-4ca3-7279-08db63a75beb",
                        "startDate": "2023-06-14T09:00:00",
                        "endDate": "2023-06-14T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "e1bf247e-ae3b-45fa-727a-08db63a75beb",
                        "startDate": "2023-06-14T10:00:00",
                        "endDate": "2023-06-14T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "07c344fb-49fa-4bc6-727b-08db63a75beb",
                        "startDate": "2023-06-14T11:00:00",
                        "endDate": "2023-06-14T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-21T00:00:00",
                "appointments": [
                    {
                        "id": "73dd552f-2c6e-414b-7288-08db63a75beb",
                        "startDate": "2023-06-21T09:00:00",
                        "endDate": "2023-06-21T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "1a6e73c8-bc90-4606-7289-08db63a75beb",
                        "startDate": "2023-06-21T10:00:00",
                        "endDate": "2023-06-21T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "b48b7eaf-4e41-4916-728a-08db63a75beb",
                        "startDate": "2023-06-21T11:00:00",
                        "endDate": "2023-06-21T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-28T00:00:00",
                "appointments": [
                    {
                        "id": "c83b3a63-be3b-4075-7297-08db63a75beb",
                        "startDate": "2023-06-28T09:00:00",
                        "endDate": "2023-06-28T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "92730e42-987f-4648-7298-08db63a75beb",
                        "startDate": "2023-06-28T10:00:00",
                        "endDate": "2023-06-28T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "ac7dcff9-3909-42d9-7299-08db63a75beb",
                        "startDate": "2023-06-28T11:00:00",
                        "endDate": "2023-06-28T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            }
        ]
    },
    {
        "day": 4,
        "appointmentDates": [
            {
                "date": "2023-06-08T00:00:00",
                "appointments": [
                    {
                        "id": "87dd3add-0e0e-483f-726d-08db63a75beb",
                        "startDate": "2023-06-08T09:00:00",
                        "endDate": "2023-06-08T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "faa06be2-455f-4bed-726e-08db63a75beb",
                        "startDate": "2023-06-08T10:00:00",
                        "endDate": "2023-06-08T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "6a8f7402-1fc0-484e-726f-08db63a75beb",
                        "startDate": "2023-06-08T11:00:00",
                        "endDate": "2023-06-08T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-15T00:00:00",
                "appointments": [
                    {
                        "id": "ca3313c2-453d-4389-727c-08db63a75beb",
                        "startDate": "2023-06-15T09:00:00",
                        "endDate": "2023-06-15T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "e646cd13-e907-495b-727d-08db63a75beb",
                        "startDate": "2023-06-15T10:00:00",
                        "endDate": "2023-06-15T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "a7731c7c-d9ba-40c2-727e-08db63a75beb",
                        "startDate": "2023-06-15T11:00:00",
                        "endDate": "2023-06-15T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-22T00:00:00",
                "appointments": [
                    {
                        "id": "ec346f0c-85b7-4a2a-728b-08db63a75beb",
                        "startDate": "2023-06-22T09:00:00",
                        "endDate": "2023-06-22T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "02f27730-90c5-4a42-728c-08db63a75beb",
                        "startDate": "2023-06-22T10:00:00",
                        "endDate": "2023-06-22T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "96a18852-5356-410c-728d-08db63a75beb",
                        "startDate": "2023-06-22T11:00:00",
                        "endDate": "2023-06-22T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-29T00:00:00",
                "appointments": [
                    {
                        "id": "e34bbbf8-4857-4a73-729a-08db63a75beb",
                        "startDate": "2023-06-29T09:00:00",
                        "endDate": "2023-06-29T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "8e33f6c5-9615-4edf-729b-08db63a75beb",
                        "startDate": "2023-06-29T10:00:00",
                        "endDate": "2023-06-29T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "939eaf91-6ee1-4346-729c-08db63a75beb",
                        "startDate": "2023-06-29T11:00:00",
                        "endDate": "2023-06-29T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            }
        ]
    },
    {
        "day": 5,
        "appointmentDates": [
            {
                "date": "2023-06-09T00:00:00",
                "appointments": [
                    {
                        "id": "c9ed83a8-2d49-4fde-7270-08db63a75beb",
                        "startDate": "2023-06-09T09:00:00",
                        "endDate": "2023-06-09T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "2d5e8f26-4ca5-42b1-7271-08db63a75beb",
                        "startDate": "2023-06-09T10:00:00",
                        "endDate": "2023-06-09T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "5728cc31-648e-47ad-7272-08db63a75beb",
                        "startDate": "2023-06-09T11:00:00",
                        "endDate": "2023-06-09T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-16T00:00:00",
                "appointments": [
                    {
                        "id": "e974b368-bac2-482c-727f-08db63a75beb",
                        "startDate": "2023-06-16T09:00:00",
                        "endDate": "2023-06-16T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "6906bbb0-0717-4ec5-7280-08db63a75beb",
                        "startDate": "2023-06-16T10:00:00",
                        "endDate": "2023-06-16T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "c2cc8f9b-b4ad-432b-7281-08db63a75beb",
                        "startDate": "2023-06-16T11:00:00",
                        "endDate": "2023-06-16T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-23T00:00:00",
                "appointments": [
                    {
                        "id": "dd715b00-27d1-4639-728e-08db63a75beb",
                        "startDate": "2023-06-23T09:00:00",
                        "endDate": "2023-06-23T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "3fa07239-6a70-4017-728f-08db63a75beb",
                        "startDate": "2023-06-23T10:00:00",
                        "endDate": "2023-06-23T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "d6cc934f-be87-458e-7290-08db63a75beb",
                        "startDate": "2023-06-23T11:00:00",
                        "endDate": "2023-06-23T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            },
            {
                "date": "2023-06-30T00:00:00",
                "appointments": [
                    {
                        "id": "d8e403aa-15bd-403f-729d-08db63a75beb",
                        "startDate": "2023-06-30T09:00:00",
                        "endDate": "2023-06-30T10:00:00",
                        "available": 1
                    },
                    {
                        "id": "420229cd-2c30-4785-729e-08db63a75beb",
                        "startDate": "2023-06-30T10:00:00",
                        "endDate": "2023-06-30T11:00:00",
                        "available": 1
                    },
                    {
                        "id": "5c6301d6-4a5b-46e3-729f-08db63a75beb",
                        "startDate": "2023-06-30T11:00:00",
                        "endDate": "2023-06-30T12:00:00",
                        "available": 1
                    }
                ],
                "availableAppointments": 3
            }
        ]
    }
]

const Company = () => {
    const {id} = useParams();
    const styles = useStyles();
    const [hidden, setHidden] = useState(true)
    const handleClick = () => {
        setHidden(false)
    }
    const [currentAppointmentDate, setCurrentAppointmentDate] = useState(null)
    const handleSetAppointmentDate = (appointmentDate) => {
        setCurrentAppointmentDate(appointmentDate)
    }
    const getSum = (date) => {
        let values = date.appointments.map(x => x.available)
        return values.reduce((partialSum, a) => partialSum + a, 0);
    }
    const [confirmAppointment, setConfirmAppointment] = useState(false)
    const [currentAppointmentInfo, setCurrentAppointmentInfo] = useState(null)
    const handleOpenConfirmAppointment = (x) => {
        setCurrentAppointmentInfo(x)
        setConfirmAppointment(true)
    }
    const handleCloseConfirmAppointment = () => {
        setConfirmAppointment(false)
    }
    const getAppointmentsByDay = (day) => {
        let dayBlock = appointments.find(x => x.day === day);
        if (dayBlock != null) {
            return (
                <div className={styles.day}>
                    {
                        dayBlock.appointmentDates.map(x =>
                            <div onClick={ () => handleSetAppointmentDate(x) } className={styles.slot}>
                                <Typography>{new Date(Date.parse(x.date)).toLocaleDateString()}</Typography>
                                <Chip style={{ color: 'green', fontWeight: 'bold' }} className={styles.chip} label={getSum(x)}/>
                            </div>
                        )}
                </div>
            )
        }
    }
    const [success, setSuccess] = useState(false)
    const handleCloseSuccess = () => {
        setSuccess(false)
    }

    return (
        <Container container className={styles.content}>
            <Container>
                <div className={styles.info}>
                    <Typography className={styles.title}>{company.title}</Typography>
                    <Typography className={styles.description}>{company.description}</Typography>
                </div>
                <div>
                    <div className={styles.services}>
                        {
                            services.map(x =>
                                <div onClick={handleClick} className={styles.service}>
                                    <Typography>{x.title}</Typography>
                                </div>
                            )}
                    </div>
                </div>
            </Container>
            <Container>
                {
                    !hidden &&
                    <div className={styles.serviceInfo}>
                        <Typography>Рисование</Typography>
                        <Chip className={styles.chip} color={'primary'} label={'Развитие'}/>
                    </div>
                }
                {
                    currentAppointmentDate != null &&
                    <div className={styles.currentAppointmentDate}>
                        <Typography><strong>Дата:</strong> {new Date(Date.parse(currentAppointmentDate.date)).toLocaleDateString()}</Typography>
                        <Typography>Доступные слоты:</Typography>
                        <div className={styles.currentAppointmentDateSlots}>
                            {currentAppointmentDate.appointments.map(x =>
                                <div onClick={() => handleOpenConfirmAppointment(x)} className={styles.slotInfo}>
                                    <Typography className={styles.time}>Начало: {new Date(Date.parse(x.startDate)).toLocaleString()}</Typography>
                                    <Typography className={styles.time}>Завершение: {new Date(Date.parse(x.endDate)).toLocaleString()}</Typography>
                                    <Typography>Доступно мест: {x.available}</Typography>
                                </div>)}
                        </div>
                    </div>
                }
                {
                    !hidden &&
                    <div className={styles.appointments}>
                        <Table>
                            <TableHead>
                                <TableCell align={'center'}>ПН</TableCell>
                                <TableCell align={'center'}>ВТ</TableCell>
                                <TableCell align={'center'}>СР</TableCell>
                                <TableCell align={'center'}>ЧТ</TableCell>
                                <TableCell align={'center'}>ПТ</TableCell>
                                <TableCell align={'center'}>СБ</TableCell>
                                <TableCell align={'center'}>ВС</TableCell>
                            </TableHead>
                            <TableBody>
                                <TableCell>
                                    { getAppointmentsByDay(1) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(2) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(3) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(4) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(5) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(6) }
                                </TableCell>
                                <TableCell>
                                    { getAppointmentsByDay(0) }
                                </TableCell>
                            </TableBody>
                        </Table>

                    </div>
                }
            </Container>
            <ConfirmAppointmentDialogContainer setSuccess={setSuccess} slot={currentAppointmentInfo} open={confirmAppointment} handleClose={handleCloseConfirmAppointment}/>
            <Snackbar open={success} autoHideDuration={2000} onClose={handleCloseSuccess}>
                <Alert variant={'filled'} onClose={handleCloseSuccess} severity="success">
                    Запись подтверждена!
                </Alert>
            </Snackbar>
        </Container>
    )
}


export default Company;