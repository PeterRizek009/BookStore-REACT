import React from 'react'
import './allbooks.css'
import { Link } from 'react-router-dom'
import images from './../../images';

const AllBooks = ({ books }) => {

    const BooksNameOptions = [
        {

            value: "Economy",
            text: "Economics Books"
        },
        {

            value: "Politic Book",
            text: "Politics"
        },
        {

            value: "Religion",
            text: "Releigion"
        },
        {
            value: "Novels",
            text: "Novels"
        },
        {

            value: "Tech",
            text: "Tech"
        }
    ]

    const priceOptions = [
        {

            value: 5,
            text: "0 - 5$"
        },
        {

            value: 10,
            text: "5$ - 10$"
        },
        {

            value: 20,
            text: "10$ - 20$"
        }
    ]

    return (<>
        <section className="module-small mt-5">
            <div className="container">
                <form className="row mx-auto">
                    <div className="col-sm-4 mb-3">
                        <select className="form-control">
                            <option selected="selected">Books Section</option>
                            {BooksNameOptions.map((option) => {
                                return <option key={option.value} defaultValue={option.value}>
                                    {option.text}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <select className="form-control">
                            <option selected="selected">Price</option>
                            {priceOptions.map((option) => {
                                return <option key={option.value} defaultValue={option.value}>
                                    {option.text}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <button className="btn btn-danger btn-round btn-g" type="submit">Apply</button>
                    </div>
                </form>
            </div>
        </section>
        <section class="module-small">
            <div class="container">
                <div class="row multi-columns-row">
                    <div class="d-flex justify-content-between flex-wrap">
                        {books.map((book) => (
                                <div class="shop-items m-3">
                                    <div className="shop-item-image" key={book.id}>
                                    <Link to={`./bookdetails/${book.id}`}>
                                        <img src={images[(book.id)]} alt='' />
                                        <i className="fas fa-cart-shopping"></i> 
                                        </Link>
                                        </div>
                                        <div className="shop-item-detail">
                                            <div className='d-flex justify-content-between mx-2 mt-1'>
                                                <h5 className="shop-item-title">{book.name}</h5>
                                                <h5 className="shop-item-price">{book.price}</h5>
                                            </div>
                                        </div>
                                  
                                </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    </>
    );
}

export default AllBooks;
