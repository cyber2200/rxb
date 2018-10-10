const defaultState = {
  "lang" : "",
  "processing" : false
}

const langReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return Object.assign({}, state, {
          "lang" : action.payload.lang,
          "processing" : action.payload.processing
      })
    default:
      return state
  }
}

export default langReducer
