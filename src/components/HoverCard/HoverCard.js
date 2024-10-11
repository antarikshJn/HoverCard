import React, { useEffect, useRef, useState } from 'react';
import "./HoverCard.css";
import PropTypes, { node } from 'prop-types';
import HoverCardTrigger from './HoverCardTrigger';
import HoverCardContents from './HoverCardContents';

const HoverCard = ({ children }) => {
    const [showHoverCard, setHoverCard] = useState(true);
    const [contentStyle, setContentStyle] = useState({});

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

    const handleMouseEnter = (event) => {
        setHoverCard(true);
    }

    const handleMouseLeave = (event) => {
        setHoverCard(false);
    }

    useEffect(() => {
        if(showHoverCard && triggerRef.current && contentRef.current){
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const contentRect = contentRef.current.getBoundingClientRect();
            
            let left =  Math.abs(contentRect.width - triggerRect.width) / 2
            if(contentRect.width > triggerRect.width){
                const spaceOnRight = window.innerWidth - (contentRect.right - left);
                const spaceOnLeft = contentRect.left;
                if(spaceOnLeft < left){
                    left = spaceOnLeft;
                }
                if(spaceOnRight < 0){
                    left += -spaceOnRight;
                }
            }

            let style = {
                left : contentRect.width > triggerRect.width ? -left : left,
            }
            if(triggerRect.top >= contentRect?.height){
                style = {
                    ...style,
                    position : "absolute",
                    bottom : '100%',
                    marginBottom : "10px",
                }
            }
            else{
                style = {
                    ...style,
                    position : "absolute",
                    top : '100%',
                    marginTop : "10px",
                }
            }
            setContentStyle(style);
        }
        else{
            setContentStyle({});
        }
    }, [showHoverCard])

    return (
        <div className='HoverCard' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div ref={triggerRef} className='triggerRefEnv'>
                {foundTrigger}
            </div>
            { showHoverCard 
                && 
                <div ref={contentRef} className='contentRefEnv' style={contentStyle}>
                    {foundContent}
                </div>
            }
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