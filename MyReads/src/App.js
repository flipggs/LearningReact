import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
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
