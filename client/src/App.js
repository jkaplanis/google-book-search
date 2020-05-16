import React, { useEffect, useState } from "react";
import Search from "./pages/Search";
import API from "./utils/API";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const search = "harry potter";
    API.booksSearch(search).then(response => {
      setSearchResult(response.data);
    });
  }, []);
  console.log(searchResult);

  return <Search />;
}

export default App;
