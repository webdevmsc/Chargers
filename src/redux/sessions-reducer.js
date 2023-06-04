import {sessionsAPI} from "../api/api";

const SET_SESSIONS = 'SET_SESSIONS'


let initialState = {
    sessions: []
}

const sessionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSIONS:
            return { ...state, sessions: action.sessions };
        default:
            return state;
    }
}

//action creators
export const setSessions = (sessions) => ({type: SET_SESSIONS, sessions});

//thunk
export const getSessions = () => async (dispatch) => {
    let response = await sessionsAPI.getSessions();
    dispatch(setSessions(response));
}

export const confirmSession = (request) => async (dispatch) => {
    await sessionsAPI.handleEvent(request);
}

export const cancelSession = (request) => async (dispatch) => {
    await sessionsAPI.cancelEvent(request);
}

export default sessionsReducer;
