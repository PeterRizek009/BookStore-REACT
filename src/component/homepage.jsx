import React, { Component } from 'react';
import Header from './header';
import AllBooks from './allbooks';
import axios from 'axios';
import BooksView from './booksview';
import AboutUs from './aboutus';

class HomePage extends Component {
    state = {
        books:[],
    }


    async componentDidMount() {
     
        let {data} = await axios.get("http://localhost:3004/Books/");
        // set state
        this.setState({books : data});
     }



    render() {
        
        return (
            <React.Fragment>
                <Header />
                <AllBooks books={this.state.books}/>
                <BooksView books={this.state.books}/>
                <AboutUs/>
            </React.Fragment>);
    }
}

export default HomePage;