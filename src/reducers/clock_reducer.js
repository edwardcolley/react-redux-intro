import types from '../actions/types';


const DEFAULT_STATE = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
}

function clockReducer(state = DEFAULT_STATE, action) {
    switch(action.type){
        case types.TICK:
            return { ...state, time: action.time };
        default:
            return state;
    }
}

export default clockReducer;