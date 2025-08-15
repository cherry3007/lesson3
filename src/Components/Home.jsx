import React from 'react';
import "./Home.css";

const books = [
  {
    title: "Tafsiri Hilol",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/tafsiri-hilol.jpg"
  },
  {
    title: "Ijtimoiy Odoblar",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/ijtimoiy-odoblar.jpg"
  },
  {
    title: "Ulamolar Nazdida Vaqtning Qadri",
    author: "Abdulfattoh Abu G‘udda",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/ulamalar-vaqt.jpg"
  },
  {
    title: "Oltin Silsila",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/oltin-silsila.jpg"
  },
  {
    title: "Ikki Eshik Orasi",
    author: "Abdulla Qodiriy",
    description: "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/ikki-eshik-orasi.jpg"
  },
  {
    title: "O‘tkan Kunlar",
    author: "Abdulla Qodiriy",
    description: "Roman XIX aasr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiing fojeaviy sevgi qissasi atrofida ifodalangan",
    image: "img/otkan-kunlar.jpg"
  }
];

const Home = () => {
  return (
    <div className="cards">
      {books.map((book, index) => (
        <div className="card" key={index}>
          <div className="card_img">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="card_text">
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <p>{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
