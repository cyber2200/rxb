const defaultState = {
  "showLangPopup" : false
}

const menu = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_SHOW_LANG_POPUP':
      return Object.assign({}, state, {
          "showLangPopup" : action.payload
      })
    default:
      return state
  }
}

export default menu
