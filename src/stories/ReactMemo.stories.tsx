import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret) // React.memo возращает компонент, который будет перерисовываться только, если изменились props

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => setUsers([...users, "Sveta"])

    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUser}>Add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    )
}