import React from 'react';
import NewBooks from '../newbooks/newbooks';
import BooksView from '../booksview/booksview';
import Header from './../header/header';
import AboutUs from './../aboutus/aboutus';


const HomePage = ({books , onSave}) => {
    return(
        <>
        <Header />  
        <NewBooks books={books} onSave={onSave}/>
        <BooksView books={books}  />
        <AboutUs />
        </>
    )
}




export default HomePage;

