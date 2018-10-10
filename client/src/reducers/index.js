import { combineReducers } from 'redux'
import loginReducer from './login'
import signupReducer from './signup'
import fileUploader from './fileUploader'
import authReducer from './auth'
import langReducer from './lang'
import loaderReducer from './loader'

const rootReducer = combineReducers({
  fileUploader: fileUploader,
  login: loginReducer,
  signup: signupReducer,
  auth: authReducer,
  lang: langReducer,
  loader: loaderReducer
})

export default rootReducer
