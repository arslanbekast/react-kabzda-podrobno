// import type {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions"
import {Accordion} from "./Accordion";
import React, {useState} from "react";

// const meta: Meta<typeof  Accordion> = {
//     component: Accordion
// }
// export default meta;

export default {
    component: Accordion
}



// type Story = StoryObj<typeof  Accordion>
//
// export const FirstStory: Story = {
//     args: {
//         title: 'bla',
//         collapsed: true
//     }
// }

const callback = action('accordion mode change event fired')

export const CollapsedAccordion = () => {
    return <Accordion title={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={ callback }/>
}

export const OpenedAccordion = () => {
    return <Accordion title={"Opened Accordion"}
                      collapsed={false}
                      onChange={ callback }/>
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}/>
}
