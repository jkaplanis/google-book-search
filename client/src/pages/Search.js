import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchField from "../components/SearchField";
import BookDetails from "../components/BookDetails";
import API from "../utils/API";
import { get } from "mongoose";

function Search({ searchResult, getSearchedBooks, saveBooks }) {
  return (
    <>
      <Nav />
      <Jumbotron />
      <SearchField getSearchedBooks={getSearchedBooks} />
      <BookDetails results={searchResult} saveBooks={saveBooks} />
    </>
  );
}
export default Search;
