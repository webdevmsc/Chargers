import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles, Snackbar,
    Typography
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import {Alert} from "@material-ui/lab";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > button': {
            marginRight: '15px'
        }
    }
}))

const ConfirmAppointmentDialog = ({ open, handleClose, slot, setSuccess }) => {
    const styles = useStyles();
    const handleConfirm = () => {
        handleClose();
        setSuccess(true)
    }

    return (
        <Dialog maxWidth={'sm'} fullWidth open={open} onClose={handleClose}>
            <div className={styles.header}>
                <DialogTitle>
                    Подтвердить запись?
                </DialogTitle>
                <IconButton onClick={handleClose}>
                    <ClearIcon/>
                </IconButton>
            </div>
            { slot !== null &&
                <DialogContent>
                    <Typography>Дата начала: {new Date(Date.parse(slot.startDate)).toLocaleString()}</Typography>
                    <Typography>Дата завершения: {new Date(Date.parse(slot.endDate)).toLocaleString()}</Typography>
                </DialogContent>
            }
            <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={handleConfirm}>Подтвердить</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmAppointmentDialog;