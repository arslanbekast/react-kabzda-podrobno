// import type {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions"
import {Accordion, ItemType} from "./Accordion";
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
const onClickCallback = action('Some item was clicked')

const itemsArr: ItemType[] = [
    {title: 'Dimych', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
]

export const MenuCollapsedMode = () => {
    return <Accordion title={"Menu"}
                      collapsed={true}
                      onChange={callback}
                      items={[]}
                      onClick={onClickCallback}/>
}

export const UsersUncollapsedMode = () => {
    return <Accordion title={"Users"}
                      collapsed={false}
                      onChange={callback}
                      items={itemsArr}
                      onClick={onClickCallback}/>
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}
                      items={itemsArr}
                      onClick={(id) => alert(`User with ID ${id} should be happy`)}/>
}
