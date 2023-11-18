import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
//    difficult counting
    console.log('Generate data')
    return 1;
}

export const Example1 = () => {
    const initValue = generateData()
    // const [counter, setCounter] = useState(initValue)
    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={() => setCounter(counter => counter + 1)}>+</button>
            {counter}
        </>
    )
}