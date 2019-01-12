import React from 'react';
import Spinner from './Spinner';
import Book from './Book';

const BooksList = ({ loading = false, books = [], count = 0 }) => {
  return (
    <section className="section">
      <div className="container">
        {loading && <Spinner />}
        {books.length > 0 && (
          <p className="subtitle">
            Showing <strong>{books.length}</strong> of <strong>{count}</strong>{' '}
            results.
          </p>
        )}
        {books.map(book => (
          <Book book={book} key={book.key} />
        ))}
      </div>
    </section>
  );
};

export default BooksList;
