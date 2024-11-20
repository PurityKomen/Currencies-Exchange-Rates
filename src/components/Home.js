import React, { useEffect, useState } from "react";
import Search from "./Search";
import CurrenciesList from "./CurrenciesList";

function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    setScrollTop(window.scrollY);
  };

  //fetch currencies data to display on the table
  useEffect(() => {
    fetch("https://currencies-api-gwte.onrender.com/fx")
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  //filter data based on the search term
  let filteredData = currencies.filter((item) => {
    return item.nameI18N?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDataFromChild = (data) => {
    setSearchTerm(data);
  };

  return (
    <div className="container m-3 home">
      <h3 className={`header display-4 ${scrollTop > 0 ? "hidden" : ""}`}>
        Currencies and Exchange Rate
      </h3>
      <Search search={handleDataFromChild} />

      <table className="table table-bordered table-striped ms-4">
        <thead>
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Currency</th>
            <th scope="col">Exchange Rate</th>
          </tr>
        </thead>

        <tbody>
          {filteredData?.length > 0
            ? filteredData.map((item) => {
                return (
                  <CurrenciesList
                    key={item.id}
                    flag={item.currency}
                    name={item.nameI18N}
                    currency={item.currency}
                    exchangeRate={item.exchangeRate?.buy}
                  />
                );
              })
            : currencies.map((item) => {
                return (
                  <CurrenciesList
                    key={item.id}
                    flag={item.currency}
                    name={item.nameI18N}
                    currency={item.currency}
                    exchangeRate={item.exchangeRate?.sell}
                  />
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
