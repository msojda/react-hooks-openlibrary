import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import Book from './Book';
import * as client from './OpenLibraryClient';

class App extends Component {
  state = { books: [], isFetching: false, query: '', numFound: 0 };

  onSearch = async e => {
    e.preventDefault();
    this.setState({ isFetching: true, books: [] });
    const result = await client.findBooks(this.state.query);
    const { docs = [], numFound = 0 } = result;
    this.setState({ books: docs, isFetching: false, numFound });
  };

  onQueryChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">
              Open Library books search
            </h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <form onSubmit={this.onSearch}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Title"
                    defaultValue={this.state.query}
                    onChange={this.onQueryChange}
                  />
                </div>
                <div className="control">
                  <button type="submit" className="button is-info is-large">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {this.state.isFetching && <Spinner />}
            {this.state.books.length > 0 && (
              <p className="subtitle">
                Showing <strong>{this.state.books.length}</strong> of{' '}
                <strong>{this.state.numFound}</strong> results.
              </p>
            )}
            {this.state.books.map(book => (
              <Book book={book} key={book.key} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
