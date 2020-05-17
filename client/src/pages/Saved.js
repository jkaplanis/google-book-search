import React from "react";

import SavedBooks from "../components/SavedBooks/index";

function Saved({ deleteBook, savedBooks, loadSavedBooks }) {
  return (
    <SavedBooks
      deleteBook={deleteBook}
      savedBooks={savedBooks}
      loadSavedBooks={loadSavedBooks}
    />
  );
}
export default Saved;
