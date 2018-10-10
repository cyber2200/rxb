const defaultState = {
  "fileInput" : {},
  "fileFeeder" : ""
}

const fileUploader = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPLOADER_FILE_INPUT':
      return Object.assign({}, state, {
        "fileInput" : action.payload,
        "fileFeeder" : state.fileFeeder
      })
    case 'UPDATE_FILE_FEEDER':
      return Object.assign({}, state, {
        "fileInput" : state.fileInput,
        "fileFeeder" : action.payload
      })
    default:
      return state
  }
}

export default fileUploader
