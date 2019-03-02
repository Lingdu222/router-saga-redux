import React from 'react'

export default function ItemEditor({ items }) {
    return (
        <div>
            <h2>{items.title}</h2>
            <textarea name="" id="" cols="30" rows="10">
                {items.content}
            </textarea>
        </div>
    )
}
