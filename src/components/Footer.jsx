import React from "react";

function Footer() {
    return (<div className="footer">
        <div className="financeInsti">
            <h2>Financial Institutions</h2>
            <p><a href="https://www.imf.org" target="_blank" rel="noopener noreferrer">International Monetary Fund (IMF)</a></p>
            <p><a href="https://www.worldbank.org" target="_blank" rel="noopener noreferrer">World Bank</a></p>
            <p><a href="https://www.bis.org" target="_blank" rel="noopener noreferrer">Bank for International Settlements (BIS)</a></p>
            <p><a href="https://www.ecb.europa.eu" target="_blank" rel="noopener noreferrer">European Central Bank (ECB)</a></p>
            <p><a href="https://www.federalreserve.gov" target="_blank" rel="noopener noreferrer">U.S. Federal Reserve</a></p>
            <p><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer">Reserve Bank of India (RBI)</a></p>
        </div>
        <div className="vertical-line"></div>\
        <div className="box">
            <img src="/logo.svg" alt="" className="ft-log"/>
            <p>Expense Tracker<br />Brought to you by Saurav Suman</p>
        </div>

    </div>)
}

export default Footer;