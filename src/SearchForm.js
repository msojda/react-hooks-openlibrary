import React from 'react';

const SearchForm = ({ query, onQueryChange, onSearch }) => {
  return (
    <section className="section">
      <div className="container">
        <form onSubmit={onSearch}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input is-large"
                type="text"
                placeholder="Title"
                defaultValue={query}
                onChange={onQueryChange}
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
  );
};

export default SearchForm;
