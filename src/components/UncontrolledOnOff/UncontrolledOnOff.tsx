import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: PropsType) => {

    const [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
        display: "inline-block"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red",
        display: "inline-block"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red",
        display: "inline-block"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            <button style={offStyle} onClick={offClicked}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;