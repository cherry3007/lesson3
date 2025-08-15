import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    author: "",
    img: "",
    desc: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // убираем ошибку при изменении поля
  };

  const handleSubmit = () => {
    if (!form.name || !form.author || !form.img || !form.desc) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    onAdd(form); // добавление книги
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>X</button>

        <input
          name="name"
          placeholder="Book title"
          onChange={handleChange}
          className="mn"
        />
        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <input
          name="img"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <textarea
          name="desc"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button className="add-btn" onClick={handleSubmit}>Add Book</button>
      </div>
    </div>
  );
};

export default Modal;
