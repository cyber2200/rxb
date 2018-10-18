import { combineReducers } from 'redux'
import loginReducer from './login'
import signupReducer from './signup'
import fileUploader from './fileUploader'
import authReducer from './auth'
import langReducer from './lang'
import loaderReducer from './loader'
import menu from './menu/menu'

const rootReducer = combineReducers({
  fileUploader: fileUploader,
  login: loginReducer,
  signup: signupReducer,
  auth: authReducer,
  lang: langReducer,
  loader: loaderReducer,
  menu : menu
})

export default rootReducer
