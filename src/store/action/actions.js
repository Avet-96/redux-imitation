export const UPDATE_COUNTER = 'UPDATE_COUNTER'
export const CHANGE_STEP_SIZE = 'CHANGE_STEP_SIZE'

// action creators
export const updateCounter = value => ({
    type: UPDATE_COUNTER,
    payload: value,
})

export const changeStepSize = value => ({
    type: CHANGE_STEP_SIZE,
    payload: value,
})
