const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

let initialState = {
    success: false
}

const successReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SUCCESS:
            return { ...state, success: action.success };
        default:
            return state;
    }
}

const setSuccess = (success) => ({ type: UPDATE_SUCCESS, success })

export const handleSuccess = (success) => async (dispatch) => {
    dispatch(setSuccess(success))
}


export default successReducer;