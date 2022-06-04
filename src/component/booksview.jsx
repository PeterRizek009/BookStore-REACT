import React, { Component } from 'react';
import '../css/booksview.css';
import axios from "axios";
import images from "../images.js";
import { Link } from 'react-router-dom';



class BooksView extends Component {
    state = {}

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:3004/Books/");
        // set state
        this.setState({ books: data });
    }

    render() {
      const { books } = this.props;
        return (
            <section className="Scicence-books">
                <div className="container" id="Scicence">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Our <b> Books</b></h2>
                        </div>
                        <div className="sci-books">
                        {(books).map((books) => (
                                <div className="book" key={books.id}>
                                   <Link to={`./bookdetails/${books.id}`}><img src={images[(books.id)]} alt /></Link> 
                                    <div className="thumb-content">
                                        <h4>{books.name}</h4>
                                        <p className="item-price">
                                            <strike>{books.price}</strike> <span>25%</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>  
                    </div>
                </div>
            </section>
        );
    }
}

export default BooksView;