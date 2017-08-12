import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const {
    onFilterTextInput,
    onInStockInput,
    filterText,
    inStockOnly
  } = props;

  const handleFilterTextInputChange = (e) => {
    onFilterTextInput(e.target.value);
  }

  const handleInStockInputChange = (e) => {
    onInStockInput(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextInputChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockInputChange}
        />
        {' '}
        Only show products in stock
        </p>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onFilterTextInput: PropTypes.func.isRequired,
  onInStockInput: PropTypes.func.isRequired,
}

export default SearchBar;