import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo useCallback demo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret) // React.memo возращает компонент, который будет перерисовываться только, если изменились props

export const HelpsToReactMemoExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const filteredUsers = useMemo(() =>{
        return users.filter(u=>u.toLowerCase().indexOf("a") > -1);
    }, [users])

    const addUser = () => setUsers([...users, "Sveta"])

    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUser}>Add user</button>
            {counter}
            <Users users={filteredUsers} />
        </>
    )
}



export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'TypeScript', 'JavaScript'])

    // const filteredBooks = useMemo(() =>{
    //     return books.filter(book=>book.toLowerCase().indexOf("a") > -1);
    // }, [books])

    const addBook = () => setBooks([...books, "HTML"])
    const memoizedAddBook = useMemo(() => addBook, [books]) // Функцию можно мемоизировать и с использованием useMemo
    const memoizedAddBook2 = useCallback(addBook, [books]) // разница в том, что при использ. useCallback не нужно оборачивать внутреннюю функцию

    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            {counter}
            <Books books={books} addBook={memoizedAddBook2}/>
        </>
    )
}

type BooksSecretType = {
    books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={props.addBook}>Add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
    </div>
}
const Books = React.memo(BooksSecret)