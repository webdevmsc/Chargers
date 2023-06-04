import {makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const companies = [
    {
        "id": "5aa27268-2503-458d-a50f-08db63a3342a",
        "title": "Маленький гений",
        "description": "Развивающие кружки для детей",
        "createdAt": "2023-06-03T01:54:40.2076773",
        "updatedAt": "2023-06-03T02:03:45.9700103"
    },
    {
        "id": "0260100a-52de-4f54-a510-08db63a3342a",
        "title": "SuperDent",
        "description": "Стоматология VIP",
        "createdAt": "2023-06-03T01:55:05.579452",
        "updatedAt": "2023-06-03T01:55:05.579452"
    },
    {
        "id": "3be7f9f9-feaf-44f5-a511-08db63a3342a",
        "title": "KidsWorld",
        "description": "Праздники и квесты для детей",
        "createdAt": "2023-06-03T01:55:39.61058",
        "updatedAt": "2023-06-03T01:55:39.61058"
    },
    {
        "id": "732d6e52-c976-4ca7-a512-08db63a3342a",
        "title": "FunnyEvents",
        "description": "Услуги аниматоров и организация праздников",
        "createdAt": "2023-06-03T01:56:51.3202001",
        "updatedAt": "2023-06-03T01:56:51.3202001"
    },
    {
        "id": "61d5a72f-5c2e-4658-a513-08db63a3342a",
        "title": "BeautyParadise",
        "description": "Салон красоты с лучшим сервисом в городе",
        "createdAt": "2023-06-03T01:57:45.3460579",
        "updatedAt": "2023-06-03T01:57:45.3460579"
    },
    {
        "id": "449881fb-11c4-4146-a514-08db63a3342a",
        "title": "CarWash777",
        "description": "Лучшая автомойка города",
        "createdAt": "2023-06-03T01:58:16.6918891",
        "updatedAt": "2023-06-03T01:58:16.6918891"
    },
    {
        "id": "3b63cde3-f4d0-4642-a515-08db63a3342a",
        "title": "AlmaMed",
        "description": "Лучший медицинский центр города",
        "createdAt": "2023-06-03T01:58:54.7709057",
        "updatedAt": "2023-06-03T01:58:54.7709057"
    }
]

const useStyles = makeStyles(theme => ({
    company: {
        padding: '15px',
        width: '250px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
        height: '150px',
        margin: '15px',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: 'rgba(28,70,231,0.82)',
            color: 'white'
        },
        cursor: 'pointer'
    },
    companies: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '16px'
    }
}))

const Companies = () => {
    const styles = useStyles();
    const history = useHistory();

    const handleGoToCompany = (id) => {
        if (id) history.push(`/companies/${id}`);
    }

    return (
        <div className={styles.companies}>
            {
                companies.map(x =>
                    <div onClick={() => handleGoToCompany(x.id)} className={styles.company}>
                        <Typography className={styles.title}>{x.title}</Typography>
                        <Typography className={styles.description}>{x.description}</Typography>
                    </div>
                )
            }
        </div>
    )
}

export default Companies;