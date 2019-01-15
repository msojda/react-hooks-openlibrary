import React, { Fragment, useState } from 'react';
import * as client from './OpenLibraryClient';
import BooksList from './BooksList';
import SearchForm from './SearchForm';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [books, setBooks] = useState([]);
  const [numFound, setNumFound] = useState(0);
  const [query, setQuery] = useState('');

  const onSearch = async e => {
    e.preventDefault();

    setIsFetching(true);

    const result = await client.findBooks(query);
    const { docs = [], numFound = 0 } = result;

    setIsFetching(false);
    setBooks(docs);
    setNumFound(numFound);
  };

  const onQueryChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Open Library books search</h1>
        </div>
      </section>
      <SearchForm
        onQueryChange={onQueryChange}
        onSearch={onSearch}
        query={query}
      />
      <BooksList loading={isFetching} books={books} count={numFound} />
    </Fragment>
  );
};

export default App;
