import {fetchDataWrap} from '../lib/req.js';
export const updateLangStatus = (payload) => ({
  type: 'UPDATE_STATUS',
  payload
})

export const setLang = (lang) => {
  return dispatch => {
    return fetchDataWrap(dispatch, "/api/setLang", {"lang" : lang}, true)
    .then(() => {
        
    })
  }
}