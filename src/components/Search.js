import React from 'react'

function Search() {
  return (
    <div>
        <form class="justify-content-center m-4 w-50">
        <div class="form-group row">
          <div class="col">
            <input type="currencies"  class="form-control" placeholder="Search"  />
          </div>
        </div>
        <button type="submit" class="btn btn-warning m-2">Search</button>
      </form>
    </div>
  )
}

export default Search