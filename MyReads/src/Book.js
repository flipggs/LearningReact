import React, { Component } from 'react'

class Book extends Component {

    render() {

        const { book, onChangeShelf, shelfOption } = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => {
                                const shelf = event.target.value;
                                onChangeShelf(book, shelf);
                            }}
                                value={shelfOption}
                            >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading"  >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read"  >Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>
        )
    }

}

export default Book