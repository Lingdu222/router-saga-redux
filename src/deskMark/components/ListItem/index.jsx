
import React from 'react'
import PropTypes from 'prop-types'

function ListItem({ item, onClick }) {
    let formatTime = '未知时间';
    // 时间转化
    if (item.time) {
        formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }
    return (
        <div >
            <a href="#" onClick={() => onClick(item.id)}>
                <span>{formatTime}</span>
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


