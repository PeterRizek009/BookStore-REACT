import React from "react";
import "../header/header.css";
import images from './../../images';

const AllBooks = ({books}) => {


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

  return (<div>
    <section className="books">
      <div className="container" id="novels">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <h2>
              NEW <b>Books</b>
            </h2>
            <div
              id="BooksCarousel"
              className="carousel slide"
              data-bs-ride="BooksCarousel"
            >


              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row" >
                  {(books.slice(0, 4)).map((books) => (
                      <div className="col-sm-3" key={books.id}>
                        <div className="thumb-wrapper">
                          <div className="img-box">
                            <img src={images[(books.id - 1)]} alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>{books.name}</h4>
                            <p className="item-price">
                              <strike>{books.price}</strike>
                              <span>50%</span>
                            </p>
                            <div className="star-rating">
                              <ul className="list-inline">
                                {createStars()}
                              </ul>
                            </div>
                            <button className="btn btn-primary">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                 
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {(books.slice(4, 8)).map((books) => (
                      <div className="col-sm-3" key={books.id}>
                        <div className="thumb-wrapper">
                          <div className="img-box">
                            <img src={images[(books.id - 1)]} alt="image" />
                          </div>
                          <div className="thumb-content">
                            <h4>{books.name}</h4>
                            <p className="item-price">
                              <strike>{books.price}</strike>
                              <span>sale 25%</span>
                            </p>
                            <div className="star-rating">
                              <ul className="list-inline">
                                {createStars()}
                              </ul>
                            </div>
                            <button className="btn btn-primary">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
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




export default AllBooks;
