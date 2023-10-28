import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('Collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})

test('Collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})

test('Collapsed should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action

    //expection
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})