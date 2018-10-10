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

export const updateFormStatusInput = (payload) => ({
  type: 'FORM_STAUS_UPDATE',
  payload
})

export const sendForm = (formData) => {
  return dispatch => {
    dispatch(updateFormStatusInput(t("loading")))
    return fetchDataWrap(dispatch, "/api/login", formData, false)
    .then((data) => {
         if (data.res === 'OK') {
            dispatch(updateFormStatusInput("OK"))
            dispatch(auth())
         } else if (data.res === 'NOK') {
             dispatch(updateFormStatusInput(t("wrong_user_or_password")))
         } else {
            dispatch(updateFormStatusInput(t("connectivity_issues")))
         }
    });
  }
}