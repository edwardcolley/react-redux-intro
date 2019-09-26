import types from './types';

export function tick() {
    return {
        type: types.TICK,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    };
}

export function setTextColor(color) {
    return {
        type: types.SET_TEXT_COLOR,
        color: color
    }
}
