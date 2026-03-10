import React from "react";
import Header from "./Header";
import ExpenseForm from "./ExpenseForm";
import Footer from "./Footer";
import Social from "./Social";
import ExpenseList from "./ExpenseList";
import { v4 as uuidv4 } from "uuid";
import SummaryPanel from "./SummaryPanel"

function App() {
    const [item, insertItem] = React.useState([]);
    function updateItemList(newItem) {
        newItem.id = uuidv4()
        insertItem(prev => [...prev, newItem])
    }
    const category = item.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {});
    const amount = item.reduce((acc,curr)=>{
        return acc + Number(curr.amount);
    },0);
    function deleteItem(id) {
        insertItem(prev => prev.filter((prev) => prev.id !== id))
    }
    return (<>
        <Header />
        <div className="features-container">
            <h2>Expense Form</h2>
            <ExpenseForm update={updateItemList} />
            <h2>Expense list</h2>
            <ExpenseList list={item}
                del={deleteItem} />
                <h2>Suummary Panel</h2>
            <SummaryPanel
                noOfItems={item.length}
                list={category}
                cost={amount} />
        </div>

        <Footer />
        < Social />
    </>);
}


export default App;