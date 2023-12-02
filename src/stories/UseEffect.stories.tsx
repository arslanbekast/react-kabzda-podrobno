import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first and every counter change render')
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = "User "
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </>
    )
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log("tick: " + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])



    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occured: ' + counter)

        // Эта функция срабатывает либо перед уничтожением компонента,
        // либо перед новым запуском useEffect
        return () => {
            console.log('RESET EFFECT: ' + counter)
        }
    }, [counter])

    const inc = () => setCounter(counter+1)

    return (
        <>
            Hello, counter: {counter}
            <button onClick={inc}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        // Эта функция срабатывает либо перед уничтожением компонента,
        // либо перед новым запуском useEffect
        return () => {
            console.log('RESET EVENT ' + text)
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed, text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)

    useEffect(() => {

        const timeoutID = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)

        // Эта функция срабатывает либо перед уничтожением компонента,
        // либо перед новым запуском useEffect
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return (
        <>
            Typed, text: {text}
        </>
    )
}