import React, { useState } from "react";

function Search({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  //set search term to be the value the user inputs on the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //handle data after a submit
  function handleSubmit(event) {
    event.preventDefault();
    search(searchTerm);
    window.location.hash = `#search=${searchTerm}`;
    setSearchTerm("");
  }

  return (
    <div className="d-flex justify-content-center m-4">
      <form className="justify-content-center w-50" onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col">
            <input
              type="currencies"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-warning m-2">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
