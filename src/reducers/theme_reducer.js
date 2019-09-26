import types from '../actions/types';

const DEFAULT_STATE = {
    textColor: 'hotpink'
}

export default (state = DEFAULT_STATE, action) => {
    console.log('them reducer: ', action);
    switch(action.type){
        case types.SET_TEXT_COLOR:
            return { ...state, textColor: action.color}
        default:
            return state;
    }
}