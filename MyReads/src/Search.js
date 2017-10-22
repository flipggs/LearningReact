import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class Search extends Component {

    state = {
        query: ""
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {
        const { books, onChangeShelf } = this.props;
        const query = this.state.query;

        let showingBooks = [], booksTitle, booksAuthors
        if (query) {
            const match = new RegExp(escapeRegExp(query))
            booksTitle = books.filter(book => match.test(book.title))

            booksAuthors = books.filter(function (book) {
                const b = book.authors.filter(author => match.test(author));

                if (b.length > 0)
                    return book
                return null;
            })

            booksTitle.forEach(function(element) {
                showingBooks.push(element)    
            }, this);

            booksAuthors.forEach(function(element) {
                showingBooks.push(element)    
            }, this);
            
        }
        else {
            showingBooks = []
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map(book => (
                            <Book key={book.id} book={book} shelfOption={book.shelf} onChangeShelf={onChangeShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search