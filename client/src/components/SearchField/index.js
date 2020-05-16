import React, { useState } from "react";

function SearchField({ getSearchedBooks }) {
  const [inputVal, setInputVal] = useState("");

  function formSubmitHandler(event) {
    event.preventDefault();
    getSearchedBooks(inputVal);
  }

  function formChangedHandler(event) {
    setInputVal(event.target.value);
  }
  return (
    <section className="row">
      <div className="card col">
        <div className="card-body">
          <h3>Book Search</h3>
          <form>
            <div className="form-group">
              <input
                onChange={formChangedHandler}
                value={inputVal}
                type="text"
                className="form-control"
                placeholder="Book Title"
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={formSubmitHandler}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchField;
