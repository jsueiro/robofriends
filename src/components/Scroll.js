import React from "react";

const Scroll = (props) => {
    //this is a wrapper component. renders whatever it wraps
    return (

        <div style={{ overflowY: 'scroll', border: '0px solid black', height: '800px' }}>
            {props.children}
        </div>

    )
}

export default Scroll;