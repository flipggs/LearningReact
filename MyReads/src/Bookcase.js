import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf';

class Bookcase extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        const { books, onChangeShelf } = this.props;

        const booksCurrentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const booksWantToRead = books.filter(book => book.shelf === "wantToRead");
        const booksRead = books.filter(book => book.shelf === "read");

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books={booksCurrentlyReading} title="Currently Reading" onChangeShelf={onChangeShelf} />
                        <Shelf books={booksWantToRead} title="Want To Read" onChangeShelf={onChangeShelf} />
                        <Shelf books={booksRead} title="Read" onChangeShelf={onChangeShelf} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Bookcase