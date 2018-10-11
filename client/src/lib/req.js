import {updateLoaderStatus} from '../actions/loader'

export const fetchDataWrap = async (dispatch, url, reqObj, showPageLoader = true) => {
    if (showPageLoader) {
        dispatch(updateLoaderStatus({
            "show" : true
        }))        
    }

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(reqObj)
  })
  .then(response => {
      if (response.status === 500) {
          return {"res" : "NOK", "errs" : [{"msg" : "server_error"}]}
      } else {
        return response.json()                    
      }
  })
  .then(json => {
      if (showPageLoader) {
        dispatch(updateLoaderStatus({
            "show" : false
        }))
      }
      return json; 
  })
}