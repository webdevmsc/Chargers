import axios from "axios";

const ENV = "DEV";

const getUrl = (ENV) => {
    switch (ENV) {
        case "DEV":
            return "https://localhost:7280/"
        case "PROD":
            return "http://172.19.26.205:88/"
    }
}

const BASE_URL = getUrl(ENV);



const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const authAPI = {
    me() {
        return instance.get(`auth`).then(response => response.data.data);
    }
}

export const sessionsAPI = {
    getSessions() {
        return instance.get(`appointments/getMyAppointments?userId=E89C9E50-BB9C-41EE-20E7-08DB63AAE3BD`).then(response => response.data)
    },
    handleEvent(request) {
        return instance.post(`appointments/HandleEvent`, request).then(response => response.data)
    },
    cancelEvent(request) {
        return instance.post(`appointments/HandleCancel`, request).then(response => response.data)
    }
}
