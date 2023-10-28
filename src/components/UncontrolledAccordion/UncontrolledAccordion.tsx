import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    title: string
}





export function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)

    const changeCollapsed = () => {
        dispatch({type: "TOGGLE-COLLAPSED"});
    }

    return <div>
        <AccordionTitle title={props.title} changeCollapsed={changeCollapsed}/>
        {/*<button onClick={onCLickHandler}>*/}
        {/*    {collapsed ? "Expand": "Collapse"}*/}
        {/*</button>*/}
        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.changeCollapsed} style={{cursor:"pointer"}}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}