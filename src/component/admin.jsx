import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Admin = props => {

    const { books  ,onDelete } = props;
    return (
        <React.Fragment>
            <h1>admin Dashboard</h1>
            <Link className="btn btn-primary" to={'./home'}>
                Add New Item
            </Link>
            <div>
                <table className="table">
                    <thead className="thead-dark me-auto">
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.key}>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td><Link to={'./home'}><i className="fas fa-edit"></i></Link></td>
                                <td><i className="fas fa-trash" onClick={() => onDelete(book) }></i> </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </React.Fragment>
    );

}

export default Admin;