import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<Rating value={3}/>*/}
            <Accordion title={"Меню"}/>
            <Accordion title={"Users"}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}




export default App;
