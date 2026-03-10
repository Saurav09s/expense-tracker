import React, { useState } from "react";
import expenseCategories from "../expenseCategory.js";


function ExpenseForm(props) {
    var[message,setMessage] = useState(0);
    var [item, itemL] = useState({
        id: "",
        name_item: "",
        category: "",
        amount: ""
    });


    function addItems(event) {
        const { value, name } = event.target;
        itemL(prev => { return { ...prev, [name]: value } })
    }

    return (
        <div className="Container">
            <h2>Enter your expenses</h2>
            <input type="text" name="name_item" placeholder={message===1?"Please enter the name":"Enter the name of expense"} value={item.name_item} className="expense" onChange={addItems} />
            <select name="category" id="" className="expense" onChange={addItems}>
                <option value="" default>{message === 2?"Category must be selected":"Select your category"}</option>
                {expenseCategories.map((i) => (
                    <option key={i.id} value={i.name}>
                        {i.name}
                    </option>
                ))}
            </select>
            <input name="amount" type="number" placeholder={message===3?"Enter valid amount":"Enter the amount(₹)"} className="expense" value={item.amount} onChange={addItems} />
            <button onClick={(event) => {
                event.preventDefault()
                if (item.name_item.trim() === "") {
                    setMessage(1);
                    return;
                }

                if (item.category === "") {
                    setMessage(2);
                    return;
                }

                if (item.amount === "" || item.amount <= 0) {
                    setMessage(3);
                    return;
                }
                props.update(item)
                itemL({
                    id: "",
                    name_item: "",
                    category: "",
                    amount: ""
                })
            }}>Add</button>
        </div>);
}

export default ExpenseForm;