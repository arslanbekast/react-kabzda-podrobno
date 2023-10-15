import {action} from "@storybook/addon-actions"
import React, {useState} from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";

export default {
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={ callback } />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={ callback } />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'} />
