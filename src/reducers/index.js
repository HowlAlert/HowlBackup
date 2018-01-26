import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PackReducer from './PackReducer';
import SignupReducer from './SignupReducer';
import SettingsReducer from './SettingsReducer'
export default combineReducers({
  auth: AuthReducer,
  pack: PackReducer,
  signup: SignupReducer,
  setting: SettingsReducer
 });
