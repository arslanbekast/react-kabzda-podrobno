import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    const onCLickHandler = () => {
        setCollapsed(!collapsed);
    }

    return <div>
        <AccordionTitle title={props.title}/>
        <button onClick={onCLickHandler}>{collapsed ? "Expand": "Collapse"}</button>
        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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