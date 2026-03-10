import React from "react";
import info from "../social.js"
import Icon from "./Icon";
function Social() {
    return(
        <div className="social-container">
            <p>&copy; Expense Tracker<br/>pvt. ltd. {new Date().getFullYear()}</p>
           {info.map((i, index) => (
                <Icon 
                    key={index} 
                    path={i.path} 
                />
            ))}
        </div>
    )
}

export default Social;