import React from "react";

function CurrenciesList({ flag, name, currency, exchangeRate }) {
  //Convert to base currency ksh which is at 113.95
  let currentExchangeRate = exchangeRate/113.95
  
  //receive props from home page and display the data
  return (
    <>
      <tr>
        <td>
          <img
            alt="flag"
            src={`/flags/${flag.substring(0, 2).toLowerCase()}.png`}
          ></img>
        </td>
        <td>{name === undefined ? "N/A" : name}</td>
        <td>{currency}</td>
        <td>{exchangeRate === undefined ? 0 : parseFloat(currentExchangeRate).toFixed(2) }</td>
      </tr>
    </>
  );
}

export default CurrenciesList;
