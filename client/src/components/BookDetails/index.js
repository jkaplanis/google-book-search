import React from "react";

function BookDetails() {
  return (
    <section classname="container">
      <h3>Results</h3>
      <div classname="card">
        <div className="row">
          <div className="col-sm">
            <h4>Book Title</h4>
            <p>Written by: Authors</p>
          </div>

          <div className="col-sm">
            {" "}
            <button type="submit" className="btn btn-primary">
              View
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div className="col-sm-8">
            <p>description alsdkjhfsdaoghldfksjghdflkjghldfkjghldfskgh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
