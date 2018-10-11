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
    dispatch(updateFormStatusInput([]))
    return fetchDataWrap(dispatch, "/api/signup", formData, false)
    .then((data) => {
        console.log(data.errs)
        dispatch(updateFormStatusInput(data.errs))
    })
  }
}