import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
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
