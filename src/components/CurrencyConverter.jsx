import React, { useEffect } from "react";
import r from "../harCodedRates";

async function convert(from, to, amount) {
  try {
    const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`);
    const data = await response.json();
    const convertedAmount = (amount * data.rates[to]).toFixed(2);
    console.log(convertedAmount)
    return convertedAmount;
  } catch (error) {
    console.log(error.message);
    alert(r.date +"conversion rate being used");
    const c = r.rates[to] * amount;
    return c;
  }
}


function CurrencyConverter(to,amt){
    const [amount,setAmount] = React.useState(0); 
    useEffect(()=>{
      async function doConvert() {
      const val = await convert("INR", to, amt);
      setAmount(val);
    }
    doConvert();
    },[to,amt])
    return amount;
}

export default CurrencyConverter;