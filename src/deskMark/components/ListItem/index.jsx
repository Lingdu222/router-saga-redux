
import React from 'react'
import PropTypes from 'prop-types'

function ListItem({ item, onClick }) {
    return (
        <div >
            <a href="#" onClick={() => onClick(item.id)}>
                <span>{item.time}</span>
                {item.title}
            </a>
        </div>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ListItem


