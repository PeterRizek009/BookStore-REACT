import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import images from './../../images';


const BookDetails = ({ onSave , books , onWishlist}) => {

    const { id } = useParams();
     

    const book = books.filter(element => (element.id === id))[0];

    const imageStyle = {
        width: "250px",
        height: "400px",
        border: "2px solid black",
        padding: "10px",
    }
    return (
        <Fragment>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-4">
                            <img className="card-img-top mb-5 mb-md-0" style={imageStyle} src={images[id]} />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder">{book.name}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text">{`Price : ${book.price}$`}</span>
                                <span className='m-5' style={{ color: "green" }}>Sale : 25%</span>
                            </div>
                            <p className="lead" style={{ color: "black" }}>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Praesentium at dolorem quidem modi.
                                Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex ">

                                <button className="btn btn-danger flex-shrink-1" onClick={() => onSave(book)} type="button">
                                    Add to cart
                                </button>

                                <button className="btn btn-outline-dark flex-shrink-1 mx-2" onClick={() => onWishlist(book)} type="button">
                                  WishList <i className="far fa-heart"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}



export default BookDetails;