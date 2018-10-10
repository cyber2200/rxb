const defaultState = {
  "email" : "",
  "password" : "",
  "formStatus" : "",
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
    case 'FORM_STAUS_UPDATE':
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
