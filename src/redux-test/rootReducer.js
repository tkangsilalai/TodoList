import {combineReducers} from 'redux';
import {todoReducer} from './test/reducers';

const rootReducer = combineReducers({
    todolist: todoReducer
})

export default rootReducer;