import {fetchDataWrap} from '../lib/req'
import {updateSignupFormStatus} from './signup'
import {updateLoginFormStatus} from './login'
import {updateEmailInput, updatePasswordInput} from './login'

export const updateAuthStatus = (payload) => ({
  type: 'UPDATE_STATUS',
  payload
})

export const logout = () => {
    return dispatch => {
        dispatch(updateAuthStatus({
            "status" : "",
            "role" : "",
            "sessionId" : "",
            "processing" : true
        }))
        fetchDataWrap(dispatch, "/api/logout", {})
        .then((data) => {
            dispatch(updateAuthStatus({
                "status" : "no-session",
                "role" : "",
                "sessionId" : "",
                "processing" : false
            }))
        })
    }
}

const eraseForms = (dispatch) => {
   dispatch(updateSignupFormStatus({"status" : "", "errs" : []}))
   dispatch(updateLoginFormStatus({"status" : "", "errs" : []}))
   dispatch(updateEmailInput(""))
   dispatch(updatePasswordInput(""))
}

export const auth = () => {
  return dispatch => {
    dispatch(updateAuthStatus({
        "status" : "",
        "role" : "",
        "sessionId" : "",
        "processing" : true
    }))
    return fetchDataWrap(dispatch, "/api/auth", {})
    .then((data) => {
        if (data.sessionId === "") {
            dispatch(updateAuthStatus({
                "status" : "no-session",
                "role" : "",
                "sessionId" : data.sessionId,
                "processing" : false
            }))
            eraseForms(dispatch);
        } else {
            dispatch(updateAuthStatus({
                "status" : "secured",
                "role" : "",
                "sessionId" : data.sessionId,
                "processing" : false
            }))            
        }
    })
  }
}