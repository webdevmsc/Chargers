import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles, Typography
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > button': {
            marginRight: '15px'
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px'
    },
    image: {
        height: '300px'
    }
}))

const QrCodeDialog = ({ id, open, handleClose, setSuccess, user }) => {
    const styles = useStyles();

    const handleConfirm = () => {
        handleClose();
        setSuccess(true)
    }

    return (
        <Dialog maxWidth={'sm'} fullWidth open={open} onClose={handleClose}>
            <div className={styles.header}>
                <DialogTitle>
                    Сканируйте QR-код
                </DialogTitle>
                <IconButton onClick={handleClose}>
                    <ClearIcon/>
                </IconButton>
            </div>
            <DialogContent className={styles.content}>
                <img className={styles.image} src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id},${user.id}`}/>
            </DialogContent>
        </Dialog>
    )
}

export default QrCodeDialog;