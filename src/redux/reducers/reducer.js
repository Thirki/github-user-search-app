import { combineReducers } from 'redux';
import fetchApi from './fetchApi'
import theme from './theme'

const rootReducer = combineReducers({fetchApi, theme});

export default rootReducer;