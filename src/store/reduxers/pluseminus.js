const {CHANGE_STEP_SIZE} = require("../action/actions");
const {UPDATE_COUNTER} = require("../action/actions");

const initialState = {
    counter: 1,
    stepSize: 1,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_COUNTER: {
            return {...state, counter: state.counter += action.payload}
        }
        case CHANGE_STEP_SIZE: {
            return {...state, stepSize: action.payload}
        }
        default: {
            return {...state}
        }
    }
}
