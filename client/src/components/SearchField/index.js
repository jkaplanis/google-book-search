import React from "react";

function SearchField() {
  return (
    <section classname="row">
      <div classname="card col">
        <div classname="card-body">
          <h3>Book Search</h3>
          <form>
            <div classname="form-group">
              <input
                type="text"
                classname="form-control"
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
