import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {

    // const [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white",
        display: "inline-block"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red",
        display: "inline-block"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red",
        display: "inline-block"
    }

    return (
        <div>
            <button style={onStyle} onClick={ ()=>props.onChange(true) }>On</button>
            <button style={offStyle} onClick={ ()=>props.onChange(false) }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};