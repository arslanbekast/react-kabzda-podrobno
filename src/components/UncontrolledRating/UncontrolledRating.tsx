import React, {useState} from "react";


export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    return <div>
        <Star selected={ value > 0 } changeRatingValue={()=>setValue(1)}/>
        <Star selected={ value > 1 } changeRatingValue={()=>setValue(2)}/>
        <Star selected={ value > 2 } changeRatingValue={()=>setValue(3)}/>
        <Star selected={ value > 3 } changeRatingValue={()=>setValue(4)}/>
        <Star selected={ value > 4 } changeRatingValue={()=>setValue(5)}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    changeRatingValue: ()=>void
}

function Star(props: StarPropsType) {
    return props.selected
        ? <span onClick={props.changeRatingValue}><b>star</b> </span>
        : <span onClick={props.changeRatingValue}>star </span>
}