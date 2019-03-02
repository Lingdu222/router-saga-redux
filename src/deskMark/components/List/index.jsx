import React from 'react'
import ListItem from '../ListItem/index'
function List({ items }) {
    items = items.map(
        item => (
            <ListItem
                item={item}
                key={item.id}
            />
        )
    )
    console.log(items, '======')
    return (
        <div>
            {items}
        </div>
    )
}
export default List

