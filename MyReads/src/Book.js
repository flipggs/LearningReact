import React, { Component } from 'react'

class Book extends Component {

    render() {

        const { book, shelf } = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" selected={book.shelf === "currentlyReading"} >Currently Reading</option>
                                <option value="wantToRead" selected={book.shelf === "wantToRead"}>Want to Read</option>
                                <option value="read" selected={book.shelf === "read"}>Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.authors[0]}</div>
                    <div className="book-authors">{book.title}</div>
                </div>
            </li>
        )
    }

}

export default Book