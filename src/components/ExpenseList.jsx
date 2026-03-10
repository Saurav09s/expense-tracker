import React from "react"
import Items from "./Items";

function ExpenseList(props) {
    return (<div className="Container list">


        <table>
            <thead>
                <tr>
                    <th>Sl<br />No.</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>


            </thead>
            <tbody>
                {props.list.map((i, index) => {
                    return (<Items
                        key={i.id}
                        id={i.id}
                        index={index+1}
                        name={i.name_item}
                        category={i.category}
                        amount={i.amount}
                        del={props.del}
                    />
                )
                })}
            </tbody>

        </table>
    </div>);
}

export default ExpenseList