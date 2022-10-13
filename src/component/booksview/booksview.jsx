import React from 'react';
import './booksview.css';
import { Link } from 'react-router-dom';
import images from './../../images';

const BooksView = ({ books }) => {

    return (
        <section className="Scicence-books">
            <div className="b-example-divider" />
            <div className="container" id="Scicence">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Most<b> Bought Books</b></h2>
                    </div>
                    <div className="sci-books">
                        {(books.slice(0, 8)).map((books) => (
                            <div className="book" key={books.id}>
                                <Link to={`./bookdetails/${books.id}`}><img src={images[(books.id)]} alt='' /></Link>
                                <div className="thumb-content">
                                    <h5>{books.name}</h5>
                                    <p className="item-price">
                                        <strike>{books.price}</strike> <span>25%</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="btn btn-dark rounded-pill seemore-Btn" type="button">
                    See More Books <span><i className="fas fa-arrow-right"></i></span>
                </button>
            </div>
        </section>);
}

export default BooksView;

