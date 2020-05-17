import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    getSearchedBooks("harry potter");
    loadSavedBooks();
  }, []);

  function getSearchedBooks(search) {
    API.booksSearch(search).then(response => {
      setSearchResult(response.data);
    });
  }

  function loadSavedBooks() {
    API.getSavedBooks().then(res => {
      setSavedBooks(res.data);
    });
  }

  function saveBooks(id) {
    const bookData = searchResult.find(book => book.googleId === id);
    API.saveBook(bookData);
  }

  function deleteBook(id) {
    const bookData = savedBooks.find(book => book.googleId === id);
    API.deleteBook(id);
  }

  return (
    <Router>
      <Nav />
      <Jumbotron />
      <Switch>
        <Route exact path="/">
          <Search
            searchResult={searchResult}
            getSearchedBooks={getSearchedBooks}
            saveBooks={saveBooks}
          />
        </Route>
        <Route exact path="/books">
          <Saved
            deleteBook={deleteBook}
            savedBooks={savedBooks}
            loadSavedBooks={loadSavedBooks}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
