import todolistReducer from './todolist';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    todolist : todolistReducer,
    isLogged : loggedReducer
});

export default allReducers;