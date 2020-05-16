import React from "react";

function SearchField() {
  return (
    <section className="row">
      <div className="card col">
        <div className="card-body">
          <h3>Book Search</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Book Title"
              />
              <button type="submit" className="btn btn-primary">
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
