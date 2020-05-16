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

  return (
    <Search searchResult={searchResult} getSearchedBooks={getSearchedBooks} />
  );
}

export default App;
