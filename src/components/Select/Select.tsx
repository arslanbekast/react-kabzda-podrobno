import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    );
};
