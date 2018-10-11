import {fetchDataWrap} from '../lib/req'
import {auth} from '../actions/auth'
import {t} from '../trans/t'

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
    dispatch(updateLoginFormStatus(t("loading")))
    return fetchDataWrap(dispatch, "/api/login", formData, false)
    .then((data) => {
         if (data.res === 'OK') {
            dispatch(updateLoginFormStatus("OK"))
            dispatch(auth())
         } else {
            dispatch(updateLoginFormStatus(t("wrong_user_or_password")))
         }
    });
  }
}