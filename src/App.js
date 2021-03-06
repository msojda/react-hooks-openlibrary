import React, { Component, Fragment } from 'react';
import * as client from './OpenLibraryClient';
import BooksList from './BooksList';
import SearchForm from './SearchForm';

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
        <SearchForm
          onQueryChange={this.onQueryChange}
          onSearch={this.onSearch}
          query={this.state.query}
        />
        <BooksList
          loading={this.state.isFetching}
          books={this.state.books}
          count={this.state.numFound}
        />
      </Fragment>
    );
  }
}

export default App;
