import React from 'react';
import AllBooks from '../allbooks/allbooks';
import BooksView from '../booksview/booksview';
import Header from './../header/header';
import AboutUs from './../aboutus/aboutus';


const HomePage = ({books}) => {
    return(
        <>
        <Header />  
        <AllBooks books={books} />
        <BooksView books={books} />
        <AboutUs />
        </>
    )
}




export default HomePage;

