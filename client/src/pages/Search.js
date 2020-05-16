import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchField from "../components/SearchField";
import BookDetails from "../components/BookDetails";
import API from "../utils/API";

function Search(props) {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   API.booksSearch("harry+potter").then(res => {
  //     setBooks(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <>
      <Nav />
      <Jumbotron />
      <SearchField />
      <BookDetails results={props.results} />
    </>
  );
}
export default Search;
