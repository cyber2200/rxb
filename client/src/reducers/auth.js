const defaultState = {
  "status" : "",
  "role" : "",
  "sessionId" : "",
  "processing" : false
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return Object.assign({}, state, {
          "status" : action.payload.status,
          "role" : action.payload.role,
          "sessionId" : action.payload.sessionId,
          "processing" : action.payload.processing
      })
    default:
      return state
  }
}

export default authReducer
