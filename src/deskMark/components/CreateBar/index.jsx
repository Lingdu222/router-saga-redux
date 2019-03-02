import React from 'react'
import PropTypes from 'prop-types'

function CreateBar({ onClick }) {
    return (
        <div>
            <a href="#" onClick={onClick}>
                + 创建文章
            </a>
        </div>
    )
}
CreateBar.propTypes = {
    onClick: PropTypes.func.isRequired
}
export default CreateBar
