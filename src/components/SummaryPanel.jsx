import React from "react";
import fallbackcurrencies from "../currencies";
import CurrencyConverter from "./CurrencyConverter";


function SummaryPanel(props) {

    const [currencies, setCurrencies] = React.useState(fallbackcurrencies);
    const [foreignValue,setValue] = React.useState({ to: "USD" });
    React.useEffect(() => {
        fetch("https://api.frankfurter.app/currencies")
            .then(res => res.json())
            .then(data => setCurrencies(data))
            .catch(() => {
                // If API fails, fallback list stays
                console.warn("Frankfurter API failed, using fallback list");
            });
    }, []);
    function findNew(event){
        setValue({ to: event.target.value });
    }
    return (
        <div className="Container l">
            <p>Total items in list = {props.noOfItems}</p>
            {Object.entries(props.list).map(([cat, count], index) => (
                <div key={index}>
                    {cat}: {count}
                </div>
            ))}
            <p>The total amount = {props.cost}</p>
            <select className="expense" name="to" onChange={findNew}>
                {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>
                        {code} - {name}
                    </option>
                ))}
            </select>
            <p>The amount in {foreignValue.to} = {CurrencyConverter(foreignValue.to,props.cost)}</p>
        </div>
    )
}

export default SummaryPanel;