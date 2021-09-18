import { useState } from "react";
import "./App.css";
import { initialValue } from "./data";

export default function App() {
  const [books, setBooks] = useState(initialValue);

  const handleClick = (category) => {
    if (category === "all") {
      return setBooks(initialValue);
    }
    const filteredBooks = initialValue.filter((book) => {
      return book.type === category;
    });
    setBooks(filteredBooks);
  };

  return (
    <div className="App">
      <section className="book-main">
        <div className="book-heading">
          <h1> 📚 Sci-fi Books</h1>
        </div>
        <p className="para">Select any favorite genre to check ratings</p>
        <div className="btn">
          <button className="btn-upper" onClick={() => handleClick("all")}>
            All Books
          </button>
        </div>

        <div className="btn">
          <button className="btn-below" onClick={() => handleClick("Sci-fi")}>
            Sci-fi
          </button>
          <button className="btn-below" onClick={() => handleClick("Science")}>
            Science
          </button>
          <button
            className="btn-below"
            onClick={() => handleClick("Astrophysics")}
          >
            Astrophysics
          </button>
          <button
            className="btn-below"
            onClick={() => handleClick("Astronomy")}
          >
            Astronomy
          </button>
        </div>

        <div className="books-output">
          {books.map((book) => {
            return (
              <div key={book.id}>
                {" "}
                <section className="book-section">
                  <li className="list-nonbullet">
                    <div className="books-name">{book.name}</div>
                    <div className="books-rating">{book.rating}</div>
                  </li>
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
