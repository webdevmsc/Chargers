import {useState} from "react";
import {QrReader} from "react-qr-reader";
import {CircularProgress, makeStyles, Snackbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    qr: {
        width: '300px',
        height: '300px'
    }
}))

const Scanner = ({ confirmSession, handleSuccess }) => {
    const [data, setData] = useState('No result');
    const styles = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const handleResult = async (text) => {
        setLoading(true)
        let result = text.split(',')
        await confirmSession({ appointmentId: result[0], userId: result[1] })
        await handleSuccess(true)
        history.push('/myAppointments')
    }
    if (loading) return <CircularProgress/>
    return (
        <>
            <Typography variant={'h4'}>Отсканируйте QR-код</Typography>
            <QrReader containerStyle={{ width: '500px', height: '500px' }} constraints={{ facingMode: 'environment' }}
                onResult={async (result, error) => {
                    if (!!result) {
                        await handleResult(result?.text);
                    }
                }}
                style={{ width: '300px', height: '300px' }}
            />
        </>
    );
}

export default Scanner;