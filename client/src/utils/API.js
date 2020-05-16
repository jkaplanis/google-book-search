import axios from "axios";

export default {
  booksSearch: search => {
    return axios.get("/api/googlebooks", {
      params: { q: `intitle:${search}` }
    });
  },

  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  }
};
