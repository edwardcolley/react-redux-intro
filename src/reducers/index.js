import { combineReducers }  from 'redux';
import clockReducer from './clock_reducer';
import themeReducer from './theme_reducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    theme: themeReducer
});

export default rootReducer;