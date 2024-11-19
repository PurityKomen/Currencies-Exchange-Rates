import React from "react";

function CurrenciesList({ flag, name, currency, exchangeRate }) {
  console.log(flag.substring(0, 2).toLowerCase());

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
        <td>{exchangeRate === undefined ? 0 : exchangeRate}</td>
      </tr>
    </>
  );
}

export default CurrenciesList;
