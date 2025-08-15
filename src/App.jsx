import React, { useState } from "react";
import Modal from "./Components/Modal";
import BookCard from "./Components/BookCard";

// Массив книг сразу в коде
const initialBooks = [
  {
    title: "Tafsiri Hilol",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/tafsiri-hilol.jpg"
  },
  {
    title: "Ijtimoiy Odoblar",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/ijtimoiy-odoblar.jpg"
  },
  {
    title: "Ulamolar Nazdida Vaqtning Qadri",
    author: "Abdulfattoh Abu G‘udda",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/ulamalar-vaqt.jpg"
  },
  {
    title: "Oltin Silsila",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/oltin-silsila.jpg"
  },
  {
    title: "Ikki Eshik Orasi",
    author: "Abdulla Qodiriy",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/ikki-eshik-orasi.jpg"
  },
  {
    title: "O‘tkan Kunlar",
    author: "Abdulla Qodiriy",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan...",
    image: "img/otkan-kunlar.jpg"
  }
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [showModal, setShowModal] = useState(false);

  // Добавление новой книги
  const handleAddBook = (newBook) => {
    if (!newBook.title || !newBook.author || !newBook.image || !newBook.description) {
      alert("Заполните все поля!");
      return;
    }
    setBooks([...books, newBook]);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="div">
        <h1>MY Book</h1>
        <button className="btn" onClick={() => setShowModal(true)}>Add Book</button>
      </div>

      {showModal && <Modal onAdd={handleAddBook} onClose={() => setShowModal(false)} />}

      <div className="cards">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
