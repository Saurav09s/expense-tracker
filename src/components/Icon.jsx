import React from "react";

function Icon(props) {
    return(
    <a href="#" className="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
            <path
                d={props.path} />
        </svg>
    </a>);
}

export default Icon;