import  React,{ Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

class Shelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {

        const { books, title, onChangeShelf } = this.props;


        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    
                      <ol className="books-grid">
                        {books.map(book => (
                            <Book key={book.id} book={book} shelfOption={book.shelf} onChangeShelf={onChangeShelf} />
                        ))}
                    </ol>  
                </div>
            </div>
        )
    }
}

export default Shelf