import React from "react";
import "./shoppingcart.css";
import images from './../../images';

const ShoppingCart = ({ onIncrement, onDecrement, books, onDelete }) => {

  const cartBooks = books.filter((element) => element.isInCart === true);
  
  return (
    <>
      <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="product-details mb-3">
              <h2>Shopping<b>Cart</b></h2>
              <h2>{`Cart(${cartBooks.length})`}</h2>
              {cartBooks.map((book) => (
                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                  <div className="d-flex flex-row" key={book.id}>
                    <img className="rounded" src={images[book.id]} width={60} />
                    <div className="ml-2  p-3">
                      <span className="font-weight-bold d-block mb-3 bookname">
                        {book.name}
                      </span>
                      <span className="spec mt-3">
                        <div className="d-flex justify-content-between">
                          <div className="me-2 p-2 border border-dark-2">
                            {book.count}
                          </div>
                          <button
                            className="btn-sm bg-warning me-3"
                            onClick={() => onDecrement(book)}
                            type="button"
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <button
                            className="btn-sm bg-warning me-3"
                            onClick={() => onIncrement(book)}
                            type="button"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <span className="d-block ml-5">{`${book.price}`}</span>
                    <i
                      className="fas fa-trash mx-4 delete"
                      onClick={() => onDelete(book)}
                    >
                      <span>REMOVE</span>
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
