import {action} from "@storybook/addon-actions"
import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    // component: OnOff
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {setValue(e.currentTarget.value)}} /> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} /><button onClick={ save }>Save</button> - actual value {value}</>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {

}

export const ControlledSelect = () => {

}

export const ControlledInputWithFixedValue = () => <input value='it-incubator.by' />
