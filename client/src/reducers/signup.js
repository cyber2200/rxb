const defaultState = {
  "fullName" : "",
  "email" : "",
  "password" : "",
  "formStatus" : "",
}

const signupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGNUP_FULLNAME_INPUT':
      return Object.assign({}, state, {
        "fullName" : action.payload,
        "email" : state.email,
        "password" : state.password,
        "formStatus" : state.formStatus,
      })
    case 'SIGNUP_EMAIL_INPUT':
      return Object.assign({}, state, {
        "fullName" : state.fullName,
        "email" : action.payload,
        "password" : state.password,
        "formStatus" : state.formStatus,
      })
    case 'SIGNUP_PASSWORD_INPUT':
      return Object.assign({}, state, {
        "fullName" : state.fullName,
        "email" : state.email,
        "password" : action.payload,
        "formStatus" : state.formStatus,
      })
    case 'FORM_STAUS_UPDATE':
      return Object.assign({}, state, {
        "fullName" : state.fullName,
        "email" : state.email,
        "password" : state.password,
        "formStatus" : action.payload
      })
    default:
      return state
  }
}

export default signupReducer
