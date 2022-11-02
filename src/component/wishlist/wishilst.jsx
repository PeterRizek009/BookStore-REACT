import React from 'react';
import { Link } from 'react-router-dom';
import images from './../../images';


const Wishlist = ({ books, onDelete }) => {

    const wishbooks = books.filter((book) => book.wishlist === true);

    return (
        <div className="container my-5 p-3 rounded cart">
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="product-details mb-3">
                        <h2>Saved <b>items</b></h2>
                        {wishbooks.length === 0 ?
                            <div className="conatiner text-center mt-5 mx-5">
                                <h4>You haven’t saved an item yet!</h4>
                                <p className="mt-5 mr-5 h6 text-muted">Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist!
                                    All your saved items will appear here.</p>
                                <Link to={"/"}>
                                    <button className="btn btn-dark rounded-3 mt-5">
                                        Continue shopping
                                    </button>
                                </Link>
                            </div>
                            :
                            (wishbooks).map((book) => (
                                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                    <div className="d-flex flex-row" key={book.id}>
                                        <img className="rounded" src={images[book.id]} width={60} alt="" />
                                        <div className="ml-2  p-3">
                                            <span className="font-weight-bold d-block mb-3 bookname">
                                                {book.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <span className="d-block ml-5">{`${book.price}$`}</span>
                                        <i
                                            className="fas fa-trash mx-4 delete"
                                            onClick={() => onDelete(book)}
                                        >

                                        </i>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;