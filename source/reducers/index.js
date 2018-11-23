import { combineReducers } from 'redux';
import NavigationReducer from './navigation_reducer';
import InfoReducer from './info_reducer';

const rootReducer = combineReducers({NavigationReducer, InfoReducer})

export default rootReducer;
