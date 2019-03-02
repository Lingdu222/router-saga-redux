
import React from 'react'
import PropTypes from 'prop-types'

function ListItem({ item }) {
    return (
        <div>
            <a href="">
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


