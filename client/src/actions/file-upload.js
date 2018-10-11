export const fetchData = (dispatch, url, reqObj) => {
  delete reqObj.formStatus;
  var data = new FormData();
  data.append('file1', reqObj.fileInput, reqObj.fileInput.name);
  data.append('username', 'Chris');
  return fetch(url, {
    method: "POST",
    body: data
  })
  .then(response => response.json())
  .then(json => {
    dispatch(updateFileFeeder("Done"))
  })
  .catch(() => {
      
  })
}

export const updateFileInput = (payload) => ({
  type: 'UPLOADER_FILE_INPUT',
  payload
})

export const updateFileFeeder = (payload) => ({
  type: 'UPDATE_FILE_FEEDER',
  payload
})

export const uploadFile = (formData) => {
  return dispatch => {
    dispatch(updateFileFeeder("Uploading..."))
    return fetchData(dispatch, "/api/upload", formData)
  }
}