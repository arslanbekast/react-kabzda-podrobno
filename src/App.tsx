import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    return (
        <div>Star</div>
    )
}

function Accordion() {
    return <div>
        <h3>Меню</h3>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </div>
}

export default App;
