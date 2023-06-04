const SET_USER = 'SET_USER'

let initialState = {
    user: {
        id: 'E89C9E50-BB9C-41EE-20E7-08DB63AAE3BD',
        surname: 'Султанов',
        firstName: 'Султан',
        fatherName: 'Султанович',
        roles: [ 'User' ]
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
}

export const setUser = (user) => ({type: SET_USER, user});


export default authReducer;