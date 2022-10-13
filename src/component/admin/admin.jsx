import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./admin.css"

const Admin = ({ books  ,onDelete }) => {

    return (
        <React.Fragment>
            <h1>admin Dashboard</h1>
            <Link className="btn btn-primary mt-5 mr-5" to={'./addnewitem'}>
                Add New Item
            </Link>
            <div>
                <table className="table mx-auto w-50">
                    <thead className="thead-dark me-auto">
                        <tr>
                            <th scope="col">Book id</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Book Price</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.key}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td><Link to={'./home'}><i className="fas fa-edit"></i></Link></td>
                                <td><i className="fas fa-trash delete" onClick={() => onDelete(book) }></i> </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </React.Fragment>
    );

}

export default Admin;