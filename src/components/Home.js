import React, { useEffect, useState }  from 'react'
import Search from './Search'
import CurrenciesList from './CurrenciesList'

function Home() {
  const [currencies,setCurrencies] = useState([]) 

  useEffect( () => {
    fetch("http://localhost:3000/fx")
    .then(response => response.json())
    .then(data => setCurrencies(data)) 
  },[]) 
  

  return (
    <div className='container m-3'>
        <h3>Currencies and Exchange Rate</h3>
        <Search />

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Flag</th>
              <th scope="col">Name</th>
              <th scope="col">Currency</th>
              <th scope="col">Exchange Rate</th>
            </tr>
          </thead>

          <tbody>
              {currencies.map((item)=>{
                return <CurrenciesList key={item.id} flag={item.flag} name={item.nameI18N} 
                currency={item.currency}  exchangeRate={item.exchangeRate?.buy} />
              })}
          </tbody>
        </table>

    </div>
  )
}

export default Home