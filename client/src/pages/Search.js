import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchField from "../components/SearchField";
import BookDetails from "../components/BookDetails";

function Search() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <SearchField />
      <BookDetails />
    </>
  );
}
export default Search;
