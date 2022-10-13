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
  const [books, setBooks] = useState([]);
  
  const getData = async () => {
    await axios
      .get(
        `https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books`
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
  }, [books]);

  const onCart = (book) => {
    book.isInCart = true;
    //clone
    const index = books.indexOf(book);

    setBooks(books);
    console.log(books);
    handleSubmit(index);
  };
  const handleSubmit = async (index) => {
    //clone
    const book = { ...books[index] };
    console.log(book);
    //edit
    try {
      await axios.patch(
        "https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" +
          index,
        book
      );
    } catch (error) {
      alert("Cannot change item data");
    }
  };

  const handleRemoveItem = async (book) => {
    //clone
    const index = books.indexOf(book);
    //edit
    books[index].isInCart = false;
    const RemovedBook = { ...books[index] };
    setBooks({ books });
    try {
      await axios.patch(
        "https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" +
          index,
        RemovedBook
      );
    } catch (error) {
      alert("Cannot delete item from Cart");
    }
  };

  const handleDelete = async (books) => {
    //clone
    const oldbooks = { ...books };
    //edit
    const newbooks = books.filter((p) => p.id !== books.id);
    //set state
    setBooks({ oldbooks: newbooks });
    try {
      await axios.delete(
        "https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" +
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
    setBooks({ books });
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
    setBooks({ books });
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
// class App extends Component {

//     state = {
//         books: [],
//         isActive: false,
//     }

//      async componentDidMount() {
//          let { data } = await axios.get("https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books");
//          // set state
//          this.setState({ books: data });
//      }

//     onCart = (book) => {
//         //clone
//         const books = [...this.state.books];
//         const index = books.indexOf(book);

//         //edit
//         books[index].isInCart = true;

//         //
//         this.setState({ books });
//         this.handleSubmit(index);
//         console.log(books);
//     }

//     async handleSubmit(index) {
//         //clone
//         const book = { ...this.state.books[index] }
//         //edit
//         try {
//             await axios.patch("https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" + (index), book);
//         }
//         catch (error) {
//             alert("Cannot change item data");

//         }
//     }

//     handleRemoveItem = async (book) => {
//         //clone
//         const books = [...this.state.books];
//         const index = books.indexOf(book);
//         //edit
//         books[index].isInCart = false;
//         const RemovedBook = { ...this.state.books[index] }
//         this.setState({ books });
//         try {
//             await axios.patch("https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" + (index), RemovedBook);
//         }
//         catch (error) {
//             alert("Cannot delete item from Cart");
//         }
//     }

//     handleDelete = async (books) => {
//         //clone
//         const oldbooks = { ...this.state.books }
//         //edit
//         const newbooks = this.state.books.filter((p) => p.id !== books.id);
//         //set state
//         this.setState({ oldbooks: newbooks });
//         try {
//             await axios.delete("https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books" + books.id);
//         } catch (error) {
//             alert("Cannot delete item");
//             this.setState({ books: oldbooks });
//         };
//     }

//     handleIncrement = (book) => {
//         const books = [...this.state.books];
//         const index = books.indexOf(book);
//         books[index] = { ...books[index] };
//         //edit
//         books[index].count++;
//         //
//         this.setState({ books });
//     }

//     handleDecrement = (book) => {
//         const books = [...this.state.books];
//         const index = books.indexOf(book);
//         books[index] = { ...books[index] };
//         //edit
//         if (books[index].count >= 1) {
//             books[index].count--;
//         } else {
//             alert("Error");
//         }
//         //
//         this.setState({ books });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Navbar books={this.state.books} />
//                 <main>
//                     <Routes>
//                         <Route path="/" element={<HomePage onSave={this.onCart} />} />
//                         <Route path="/app" element={<HomePage onSave={this.onCart} books={this.state.books} />} />
//                         <Route path="/signin" element={<SignIn />} />
//                         <Route path="/admin" element={<Admin books={this.state.books} onDelete={this.handleDelete} />} />
//                         <Route path="/admin/addnewitem" element={<AddNewItem books={this.state.books} />} />
//                         <Route path="/bookdetails/:id" element={<BookDetails books={this.state.books} onSave={this.onCart} />} />
//                         <Route path="/shoppingcart" element={<ShoppingCart books={this.state.books} onSave={this.onCart} onIncrement={this.handleIncrement}
//                             onDecrement={this.handleDecrement} onDelete={this.handleRemoveItem} />} />
//                     </Routes>
//                 </main>
//             </React.Fragment>
//         );
//     }
// }

// export default App;
