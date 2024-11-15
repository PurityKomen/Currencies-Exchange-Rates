import React from 'react'

function CurrenciesList({flag,name,currency,exchangeRate}) {
  return (
    <>
      <tr>
        <td>{flag}</td>
        <td>{name === undefined ? 'N/A' : name }</td>
        <td>{currency}</td>
        <td>{exchangeRate === undefined ? 0 : exchangeRate }</td>
      </tr>
    </>
  )
}

export default CurrenciesList