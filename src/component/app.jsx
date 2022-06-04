import React, { Component } from 'react';
import Navbar from './navbar';
import {
    Routes,
    Route
} from "react-router-dom"
import AboutUs from './aboutus';
import SignIn from './signin';
import HomePage from './homepage'
import BookDetails from './bookdetails';
import ShoppingCart from './shoppingcart';
import axios from 'axios';
import Admin from './admin';


class App extends Component {

    state = {
        books: [],
        isActive: false,
    }

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:3004/Books/");
        // set state
        this.setState({ books: data });
    }

    onCart = (book) => {
        //clone
        const books = [...this.state.books];
        const index = books.indexOf(book);

        //edit
        books[index].isInCart = true;
        
        //
        this.setState({ books });
        this.handleSubmit(index);
        console.log(books);
    }

    async handleSubmit(index) {
        //clone
        const book = { ...this.state.books[index] }
        //edit
        try {
            await axios.patch("http://localhost:3004/Books/"+(index), book);
        }
        catch (error) {
            alert("Cannot change item data");

        }
    }

    handleRemoveItem = async (book) => {
        //clone
        const books = [...this.state.books];
        const index = books.indexOf(book);
        //edit
        books[index].isInCart =false;
        const RemovedBook = { ...this.state.books[index] }
        this.setState({ books });  
        try {
            await axios.patch("http://localhost:3004/Books/" + (index), RemovedBook);
        }
        catch (error) {
            alert("Cannot delete item from Cart");
        }
    }

    handleDelete = async (books) => {
        //clone
        const oldbooks = { ...this.state.books }
        //edit
        const newbooks = this.state.books.filter((p) => p.id !== books.id);
        //set state
        this.setState({ oldbooks: newbooks });
        try {
            await axios.delete("http://localhost:3004/Books/" + books.id);
        } catch (error) {
            alert("Cannot delete item");
            this.setState({ books: oldbooks });
        };
    }

    handleIncrement = (book) => {
        const books = [...this.state.books];
        const index = books.indexOf(book);
        books[index] = { ...books[index] };
        //edit
        books[index].count++;
        //
        this.setState({ books });
    }

    handleDecrement = (book) => {
        const books = [...this.state.books];
        const index = books.indexOf(book);
        books[index] = { ...books[index] };
        //edit
        if (books[index].count >= 1) {
            books[index].count--;
        } else {
            alert("Error");
        }
        //
        this.setState({ books });
    }



    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage onSave={this.onCart}  />} />
                        <Route path="/app" element={<HomePage onSave={this.onCart} />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/admin" element={<Admin books={this.state.books} onDelete={this.handleDelete} />} />
                        <Route path="/bookdetails/:id" element={<BookDetails books={this.state.books} onSave={this.onCart} />} />
                        <Route path="/shoppingcart" element={<ShoppingCart books={this.state.books} onSave={this.onCart} onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement} onDelete={this.handleRemoveItem} />} />
                    </Routes>
                </main>
            </React.Fragment>
        );
    }
}

export default App;