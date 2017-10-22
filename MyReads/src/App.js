import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      // this.updateBooks([]);
      this.setState(state => ({
        books: state.books.map(b => {
          if (b.id === book.id)
            b.shelf = shelf;

            return b;
        })
      }))
    })

  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookcase books={this.state.books} onChangeShelf={this.changeShelf} />
        )}
        />

        <Route path="/search" render={() => (
          <Search books={this.state.books} onChangeShelf={this.changeShelf} />
        )}
        />

      </div>
    )
  }
}

export default BooksApp
