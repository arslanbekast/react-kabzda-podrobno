import React, {FC, useEffect, useState} from 'react';

type ClockPropsType = {

}
const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Очитска от side эффектов.
        // Эта функция сработает, когда компонент уничтожится
        return () => {
            clearInterval(intervalID)
        }
    }, [])



    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    );
};