import React from 'react'
import ListItem from '../ListItem/index'
function List({ items, onClick }) {
    items = items.map(
        item => (
            <ListItem
                item={item}
                key={item.id}
                onClick={onClick}
            />
        )
    )
    return (
        <div>
            {items}
        </div>
    )
}
export default List

