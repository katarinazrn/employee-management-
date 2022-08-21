import {combineReducers} from 'redux';
import employeeReducer from './employeeReducer';

const reducers=combineReducers({
    employee: employeeReducer
});

export default reducers;
