import {combineReducers} from 'redux'
import AdsReducer from './ads/adsReducer';
import UserReducer from './user/userReducer';

const rootReducer=combineReducers({user:UserReducer,ads:AdsReducer})

export default rootReducer;