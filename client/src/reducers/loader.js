const defaultState = {
  "show" : false
}

const loaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_LOADER_STATUS':
      return Object.assign({}, state, {
          "show" : action.payload.show
      })
    default:
      return state
  }
}

export default loaderReducer
