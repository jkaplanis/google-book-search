import React from "react";
import SearchField from "../components/SearchField";
import BookDetails from "../components/BookDetails";

function Search({ searchResult, getSearchedBooks, saveBooks }) {
  return (
    <>
      <SearchField getSearchedBooks={getSearchedBooks} />
      <BookDetails results={searchResult} saveBooks={saveBooks} />
    </>
  );
}
export default Search;
