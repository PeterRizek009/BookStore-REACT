import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AddNewItem from "./addnewitem/addnewitem";
import Admin from "./admin/admin";
import ShoppingCart from "./shoppingcart/shoppingcart";
import BookDetails from "./bookdetails/bookdetails";
import HomePage from "./homepage/homepage";
import SignIn from "./signin/signin";
import Navbar from "./navbar/navbar";

const App = () => {

  const [books, setBooks] = useState([{}]);

  const getData = async () => {
    await axios
      .get(
        `http://localhost:3004/Books/`
      )
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 1200);
    return () => clearTimeout(timeout)
  }, []);

  const onCart = (book) => {
     //Clone
     const index = books.indexOf(book);
    //edit
     book.isInCart = true;
     book.count++;
   

    setBooks([...books],books);
    console.log(books);
   handleSubmit(book);
  };
  
  const handleSubmit = async (book) => {
    //clone
    
   
    //edit
    try {
      await axios.patch(
        `http://localhost:3004/Books/`+(book.id), book);
        
    } catch (error) {
      alert("Cannot change item data");
    }
    console.log("done");
  };

  const handleRemoveItem = async (book) => {
    //clone
    const index = books.indexOf(book);
    //edit
    books[index].isInCart = false;
    const RemovedBook = [ ...books[index] ];
    setBooks(books);
    try {
      await axios.patch(
        `https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books/`+index,
        RemovedBook
      );
    } catch (error) {
      alert("Cannot delete item from Cart");
    }
  };

  const handleDelete = async (book) => {
    //clone
    const oldbooks = { ...book };
    console.log(oldbooks);
    //edit
    const newbooks = books.filter((p) => p.id !== books.id);
    //set state
    setBooks({ oldbooks: newbooks });
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books/` +
        books.id
      );
    } catch (error) {
      alert("Cannot delete item");
      setBooks({ books: oldbooks });
    }
  };

  const handleIncrement = (book) => {
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    //edit
    books[index].count++;
    //
    setBooks(books);
  };

  const handleDecrement = (book) => {
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    //edit
    if (books[index].count >= 1) {
      books[index].count--;
    } else {
      alert("Error");
    }
    //
    setBooks(books);
  };

  return (
    <React.Fragment>
      <Navbar books={books} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onSave={onCart} books={books} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/admin"
            element={<Admin books={books} onDelete={handleDelete} />}
          />
          <Route
            path="/admin/addnewitem"
            element={<AddNewItem books={books} />}
          />
          <Route
            path="/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                books={books}
                onSave={onCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleRemoveItem}
              />
            }
          />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;

