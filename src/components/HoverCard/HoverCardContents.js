import React from 'react'
import PropTypes from 'prop-types'

const HoverCardContents = ({ children }) => {
    return (
        <div className='hoverCardContents'>{children}</div>
    )
}

HoverCardContents.propTypes = {}

export default HoverCardContents