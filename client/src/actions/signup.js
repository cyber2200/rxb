import {fetchDataWrap} from '../lib/req'

export const updateSignupEmailInput = (payload) => {
  return({
    type: 'SIGNUP_EMAIL_INPUT',
    payload
  });
}

export const updateSignupPasswordInput = (payload) => {
  return({
    type: 'SIGNUP_PASSWORD_INPUT',
    payload    
  });
}

export const updateSignupFullNameInput = (payload) => {
  return({
    type: 'SIGNUP_FULLNAME_INPUT',
    payload    
  });
}

export const updateSignupFormStatus = (payload) => ({
  type: 'SIGNUP_FORM_STAUS_UPDATE',
  payload
})

export const sendForm = (formData) => {
  return dispatch => {
    dispatch(updateSignupFormStatus({"status" : "PROCESSING", "errs" : []}))
    return fetchDataWrap(dispatch, "/api/signup", formData, false)
    .then((data) => {
        if (data.errs.length === 0) {
            dispatch(updateSignupFormStatus({"status" : "OK", "errs" : []}))            
        } else {
            dispatch(updateSignupFormStatus({"status" : "NOK", "errs" : data.errs}))
        }
    })
  }
}