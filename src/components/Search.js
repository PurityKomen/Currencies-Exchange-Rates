import React from 'react'

function Search() {
  return (
    <div>
        <form className="justify-content-center m-4 w-50">
        <div className="form-group row">
          <div className="col">
            <input type="currencies"  className="form-control" placeholder="Search"  />
          </div>
        </div>
        <button type="submit" className="btn btn-warning m-2">Search</button>
      </form>
    </div>
  )
}

export default Search