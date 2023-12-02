import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";

export default {
    component: Clock
}

export const BaseAnalogExample = () => {

    return <Clock mode='analog' />
}

export const BaseDigitalExample = () => {

    return <Clock mode='digital' />
}