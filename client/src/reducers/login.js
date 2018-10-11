const defaultState = {
  "email" : "",
  "password" : "",
  "formStatus" : {
      "status" : "",
      "errs" : []
  },
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return Object.assign({}, state, {
        "email" : action.payload,
        "password" : state.password,
        "formStatus" : state.formStatus,
      })
    case 'PASSWORD_INPUT':
      return Object.assign({}, state, {
        "email" : state.email,
        "password" : action.payload,
        "formStatus" : state.formStatus,
      })
    case 'LOGIN_FORM_STAUS_UPDATE':
      return Object.assign({}, state, {
        "email" : state.email,
        "password" : state.password,
        "formStatus" : action.payload
      })
    default:
      return state
  }
}

export default loginReducer
