import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

const itemsArr: ItemType[] = [
    {title: 'Dimych', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
]

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={'App'}>


            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<Accordion title={"Users"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*           items={itemsArr}/>*/}

            <UncontrolledAccordion title={"Меню"}/>
            {/*<UncontrolledRating />*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<OnOff on={switchOn} onChange={ setSwitchOn } />*/}

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            {/*<UncontrolledOnOff />*/}
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
