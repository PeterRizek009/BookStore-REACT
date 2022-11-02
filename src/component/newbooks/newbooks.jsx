import React from "react";
import "../header/header.css";
import images from '../../images';
import { Link } from "react-router-dom";
import './newbooks.css'


const NewBooks = ({ books, onSave }) => {

  const createStars = () => {
    let stars = [];
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < randomNumber; i++) {
      stars.push(
        <li className="list-inline-item">
          <i className="fa fa-star"></i>
        </li>
      );
    }
    return stars;
  };

  const carouselControl = () => {
    return (
      <>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#BooksCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#BooksCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </>
    );
  };


  const createSlide = (a, b) => {
    return (
      (books.slice(a, b)).map((book) => (
        <div className="col-sm-3" key={book.id}>
          <div className="thumb-wrapper">
            <div className="box-small">
            <Link to={`/bookdetails/${book.id}`}>
              <div className="img-box">
                <img src={images[(book.id - 1)]} alt="" />
              </div>
            </Link>
            <div className="thumb-content">
              
               <h4>{book.name}</h4>
              <p className="item-price">
                <strike>{book.price}$</strike>
                <span>{book.price - (2)}$</span>
              </p>
             
              <div className="star-rating">
                <ul className="list-inline">
                  {createStars()}
                </ul>
              </div>
              </div>
              <button className="btn btn-primary" onClick={() => onSave(book)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <div>
      <section className="books bg-white">
        <div className="container" id="novels">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h2>
                NEW  <b>Books</b>
              </h2>
              <div
                id="BooksCarousel"
                className="carousel slide"
                data-bs-ride="BooksCarousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row" >
                      {createSlide(0, 4)}
                    </div>
                  </div>
                  
                  <div className="carousel-item">
                    <div className="row">
                      {createSlide(5, 9)}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {createSlide(10, 14)}
                    </div>
                  </div>
                </div>
                <div>{carouselControl()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




export default NewBooks;
