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
        try {
            var ret = response.json()
            return ret
        } catch (ex) {
            if (showPageLoader) {
                dispatch(updateLoaderStatus({
                    "show" : false
                }))
            }
            return {"msg" : "AJAX_ERROR"}
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
    .catch(() => {
        if (showPageLoader) {
            dispatch(updateLoaderStatus({
                "show" : false
            }))
        }
        return {"msg" : "AJAX_ERROR"}
    })
}