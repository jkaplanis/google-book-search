import React from "react";

function SavedBooks({ savedBooks, deleteBook, loadSavedBooks }) {
  function deleteClickHandler(event, id) {
    event.preventDefault();
    deleteBook(id);
  }

  return (
    <section className="container">
      <h3>Saved Books</h3>
      {savedBooks.map(book => {
        return (
          <div key={book.googleId}>
            {" "}
            <div className="row">
              <div className="col-sm">
                <h4>{book.title}</h4>
                <p>Written by: {book.authors}</p>
              </div>

              <div className="col-sm">
                {" "}
                <button type="submit" className="btn btn-primary">
                  View
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={event => {
                    deleteClickHandler(event, book.googleId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <img src={book.image} />
              </div>
              <div className="col-sm-8">
                <p>{book.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SavedBooks;
