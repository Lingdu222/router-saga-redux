import React from 'react'
import ListItem from '../ListItem';

export default function List({ data, onshow }) {
    const item = data.map(i => {
        return <ListItem
            key={i.id}
            item={i}
            onsee={onshow}
        />
    })
    return (
        <div>
            {item}
        </div>
    )
}
