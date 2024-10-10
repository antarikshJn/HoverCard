import React, { useRef } from 'react';
import "./HoverCard.css";
import PropTypes, { node } from 'prop-types';
import HoverCardTrigger from './HoverCardTrigger';
import HoverCardContents from './HoverCardContents';

const HoverCard = ({ children }) => {
    const triggerRef = useRef(null);
    const contentRef = useRef(null);

    const foundTrigger = React.Children.toArray(children).find(
        (child) => child.type === HoverCardTrigger
    );

    const foundContent = React.Children.toArray(children).find(
        (child) => child.type === HoverCardContents
    );

    if (!foundTrigger || !foundContent) {
        console.error(
            'HoverCard requires both HoverCardTrigger and HoverCardContents children.'
        );
        throw new Error("Trigger and Content Both are required!");
    }

    const HandleMouseEnter = () => {
        // console.log("enter");
        // contentRef.current.style.display = "block";
        // triggerRef.current.style.color = "red";

    }

    const HandleMouseLeave = () => {
        // console.log("leave");
        // contentRef.current.style.display = "none";
        // triggerRef.current.style.color = "white";
    }

    return (
        <div className='HoverCard' onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
            <div ref={triggerRef}>
                {foundTrigger}
            </div>
            <div ref={contentRef} style={{ display: 'block' }}>
                {foundContent}
            </div>
        </div>
    );
};

HoverCard.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.arrayOf(PropTypes.element).isRequired,
    ]),
};

export default HoverCard;