import React, { useEffect, useState } from "react";
import Search from "./Search";
import CurrenciesList from "./CurrenciesList";
import JSZip from "jszip";

function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [scrollTop,setScrollTop] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/fx")
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    setScrollTop(window.scrollY)
  };

  const unzip = async () => {
    const zip = new JSZip();
    try {
      const zipData = await fetch("../../flags.zip");

      // Convert the Response to Blob
      const blob = await zipData.blob();

      await zip.loadAsync(blob).then((zip) => {
        console.log("data2", zip.file.length);
        return zip.file("text/html").async("string");
      });
    } catch (error) {
      console.error("Error loading ZIP file:", error);

      // Handle the error gracefully, such as displaying a message to the user
    }
  };
  console.log("data3", unzip());

  return (
    <div className="container m-3 home">
      <h3 className={`header display-4 ${scrollTop > 0 ? 'hidden' : ''}`}>Currencies and Exchange Rate</h3>
      <Search />

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
          {currencies.map((item) => {
            return (
              <CurrenciesList
                key={item.id}
                flag={item.flag}
                name={item.nameI18N}
                currency={item.currency}
                exchangeRate={item.exchangeRate?.buy}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
