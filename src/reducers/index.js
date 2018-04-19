import { combineReducers } from 'redux';
import postReducer from '../postreducers/index';


export default combineReducers({
    posts : postReducer

});

