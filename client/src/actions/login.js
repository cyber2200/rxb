import {fetchDataWrap} from '../lib/req'
import {auth} from '../actions/auth'

export const updateEmailInput = (payload) => ({
  type: 'EMAIL_INPUT',
  payload
})

export const updatePasswordInput = (payload) => {
  return({
    type: 'PASSWORD_INPUT',
    payload    
  });
}

export const updateLoginFormStatus = (payload) => ({
  type: 'LOGIN_FORM_STAUS_UPDATE',
  payload
})

export const sendForm = (formData) => {
  return dispatch => {
    dispatch(updateLoginFormStatus({"status" : "PROCESSING", "errs" : []}))
    return fetchDataWrap(dispatch, "/api/login", formData, false)
    .then((data) => {
         if (data.res === 'OK') {
            dispatch(updateLoginFormStatus({"status" : "OK", "errs" : []}))
            dispatch(auth())
         } else {
            if (Array.isArray(data.errs)) {
                dispatch(updateLoginFormStatus({"status" : "NOK", "errs" : data.errs}))                
            } else {
                dispatch(updateLoginFormStatus(data))
            }
         }
    });
  }
}