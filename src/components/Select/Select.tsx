import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value] )

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if (pretendentElement) {
                        // setHoveredElementValue(props.items[i + 1].value)
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span onClick={toggleItems} className={s.selectHeader}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <ul className={s.items}>
                        {props.items.map(item => <li key={item.value}
                                                     onMouseEnter={() => setHoveredElementValue(item.value)}
                                                     className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                                                     onClick={() => onItemClick(item.value)}>{item.title}</li>)}
                    </ul>
                }


            </div>
        </>
    );
};
