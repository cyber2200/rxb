import {fetchDataWrap} from '../lib/req'

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
    dispatch(updateFormStatusInput({"status" : "PROCESSING", "errs" : []}))
    return fetchDataWrap(dispatch, "/api/signup", formData, false)
    .then((data) => {
        if (data.errs.length === 0) {
            dispatch(updateFormStatusInput({"status" : "OK", "errs" : []}))            
        } else {
            dispatch(updateFormStatusInput({"status" : "NOK", "errs" : data.errs}))
        }
    })
  }
}