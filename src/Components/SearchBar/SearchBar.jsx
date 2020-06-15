import React, { Component } from 'react';

import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
  

    return (
      <div className={styles.searchContainer}>
        <form onSubmit={this.onFormSubmit} className={styles.searchForm}>
          <div className={styles.searchBar}>
            <label htmlFor="videoSearch">
              <h3>Youtube Video Search</h3>
            </label>
            <input
              className={styles.searchInput}
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <hr className={styles.searchHr} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
