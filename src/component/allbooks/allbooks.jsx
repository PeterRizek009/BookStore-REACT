import React from 'react'
import './allbooks.css'

const AllBooks = () => {

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

            value:  10,
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
                            <option  selected="selected">Price</option>
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
    </>
    );
}

export default AllBooks;
