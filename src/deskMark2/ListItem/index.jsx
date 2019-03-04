import React from 'react'

export default function ListItem({ item, onsee }) {
    const fromtimer = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    return (
        <div onClick={() => onsee(item.id)}>
            {fromtimer}
            <a href="#">{item.title}</a>
        </div>
    )
}
