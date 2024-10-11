import "./Dragable.css";
import React, {useRef, useState} from "react";

const Dragable = ({children}) => {
    const DragableRef = useRef(null);
    const [DragablePosition, setDragablePosition] = useState({x : undefined, y : undefined});

    const HandleDragEnd = (event) => {
        DragableRef.current.style.top = event.clientY;
        DragableRef.current.style.left = event.clientX
        setDragablePosition({x: event.clientX, y:event.clientY})
    }

    return (
       <div className="Dragable" 
            draggable
            ref={DragableRef} 
            onDragEnd={HandleDragEnd}
            style={{
                position: "absolute",
                top : DragablePosition.y,
                left : DragablePosition.x
            }}>
            {children}
       </div>
    )
}

export default Dragable;