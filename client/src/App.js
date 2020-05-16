import React, { useEffect, useState } from "react";
import Search from "./pages/Search";
import API from "./utils/API";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getSearchedBooks("harry potter");
  }, []);

  function getSearchedBooks(search) {
    API.booksSearch(search).then(response => {
      setSearchResult(response.data);
    });
  }

  function saveBooks(id) {
    const bookData = searchResult.find(book => book.googleId === id);
    API.saveBook(bookData);
  }

  return (
    <Search
      searchResult={searchResult}
      getSearchedBooks={getSearchedBooks}
      saveBooks={saveBooks}
    />
  );
}

export default App;
