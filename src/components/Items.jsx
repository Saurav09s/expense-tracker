import React from "react";

function Items(props){
    return(<tr>
        <td>{props.index}</td>
        <td>{props.name}</td>
        <td>{props.category}</td>
        <td>{props.amount}</td>
        <td><button onClick={()=>props.del(props.id)}><i className="fa fa-trash" style={{
  color: "#333"
}}></i>
</button></td>
    </tr>)
}

export default Items