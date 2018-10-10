import {fetchDataWrap} from '../lib/req'
import {t} from '../trans/t'

export const fetchData = (dispatch, url, reqObj) => {
  delete reqObj.formStatus;
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(reqObj)
  })
  .then(response => response.json())
  .then(json => {
    dispatch(updateFormStatusInput("Done"))
  })
}

export const updateEmailInput = (payload) => {
  return({
    type: 'SIGNUP_EMAIL_INPUT',
    payload
  });
}

export const updatePasswordInput = (payload) => {
  return({
    type: 'SIGNUP_PASSWORD_INPUT',
    payload    
  });
}

export const updateFullNameInput = (payload) => {
  return({
    type: 'SIGNUP_FULLNAME_INPUT',
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
    return fetchDataWrap(dispatch, "/api/signup", formData, false)
    .then((data) => {
        dispatch(updateFormStatusInput(t("OK")))
    })
  }
}