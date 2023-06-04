import {Button, Chip, Dialog, makeStyles, Typography} from "@material-ui/core";
import {DataGrid} from "@mui/x-data-grid";
import clsx from "clsx";
import {useEffect, useState} from "react";
import QrCodeDialogContainer from "../Dialogs/QrCode/QrCodeDialogContainer";

const useStyles = makeStyles(theme => ({
    chip: {
        padding: '6px',
        borderRadius: '6px'
    },
    hold: {
        backgroundColor: 'rgba(255,241,91,0.35)',
        color: 'rgba(117,115,22,0.8)',
        fontWeight: 'bold'
    },
    confirmed: {
        backgroundColor: 'rgba(121,255,91,0.35)',
        color: 'rgba(46,117,22,0.8)',
        fontWeight: 'bold'
    }
}))



const appointments = [
    {
        "id": "e53b61ae-5035-4f5f-7264-08db63a75beb",
        "startDate": "2023-06-05T09:00:00",
        "endDate": "2023-06-05T10:00:00",
        "service": "Шахматы",
        "company": "Маленький гений",
        "status": 0
    },
    {
        "id": "e53b61ae-5035-4f5f-7264-08db63a75bec",
        "startDate": "2023-06-05T09:00:00",
        "endDate": "2023-06-05T10:00:00",
        "service": "Шахматы",
        "company": "Маленький гений",
        "status": 1
    },
    {
        "id": "e53b61ae-5035-4f5f-7264-08db63a75bea",
        "startDate": "2023-06-05T09:00:00",
        "endDate": "2023-06-05T10:00:00",
        "service": "Рисование",
        "company": "KidsWorld",
        "status": 0
    },
]




const MyAppointments = ({ sessions, getSessions, cancelSession, user }) => {
    useEffect(() => {
        getSessions()
    }, [])
    const styles = useStyles();
    const parseStatus = (isConfirmed) => {
        switch (isConfirmed) {
            case false:
                return 'Ожидание'
            case true:
                return 'Подтверждено'
        }
    }
    const [success, setSuccess] = useState(false)
    const handleCloseSuccess = () => {
        setSuccess(false)
    }
    const [appointmentId, setAppointmentId] = useState(null)
    const [appointmentDialog, setAppointmentDialog] = useState(false)
    const handleOpenAppointmentDialog = (id) => {
        setAppointmentId(id)
        setAppointmentDialog(true)
    }
    const handleCloseAppointmentDialog = () => {
        setAppointmentDialog(false)
        setAppointmentId(null)
    }
    const handleCancel = async (id) => {
        await cancelSession({ appointmentId: id, userId: user.id })
        await getSessions()
    }
    const columns = [
        { field: 'service', headerName: 'Услуга', width: 120, renderCell: (params) => { return <Typography>{params.row.service}</Typography> } },
        { field: 'QR', sortable: false, editable: false, headerName: 'Код', width: 100,  renderCell: (params) => { return <Button onClick={() => handleOpenAppointmentDialog(params.row.id)}>QR</Button> } },
        { field: 'company', headerName: 'Компания', width: 180, renderCell: (params) => { return <Typography>{params.row.company}</Typography> } },
        { field: 'isConfirmed', align: 'center', headerName: 'Статус', width: 150, renderCell: (params) => { return <Chip className={clsx({[styles.hold]: params.row.isConfirmed === false, [styles.confirmed]: params.row.isConfirmed === true }, styles.chip)} label={parseStatus(params.row.isConfirmed)}/> } },
        { field: 'startDate', headerName: 'Дата начала', width: 170, renderCell: (params) => { return <Typography>{new Date(Date.parse(params.row.startDate)).toLocaleString()}</Typography> } },
        { field: 'endDate', headerName: 'Дата завершения', width: 170, renderCell: (params) => { return <Typography>{new Date(Date.parse(params.row.endDate)).toLocaleString()}</Typography> } },
        { field: 'actions', headerName: 'Действия', align: 'center', width: 330, renderCell: (params) => { return <div>{params.row.isConfirmed && <Button onClick={() => handleCancel(params.row.id)} size={'small'} variant={'outlined'} color={'secondary'}>Отмена</Button>} <Button size={'small'} style={{ marginLeft: '15px'}}  variant={'contained'} color={'primary'}>Добавить в календарь</Button></div> } },
    ]
    return (
        <div>
            <DataGrid autoHeight columns={columns} rows={sessions}/>
            <QrCodeDialogContainer id={appointmentId} open={appointmentDialog} handleClose={handleCloseAppointmentDialog} success={success} handleCloseSuccess={handleCloseSuccess}/>
        </div>
    )
}


export default MyAppointments;