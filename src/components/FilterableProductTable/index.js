// External Dependencies
import React, { Component } from 'react';

// Our Dependencies
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextInput = (filterText) => {
    this.setState({ filterText });
  }

  handleInStockInput = (inStockOnly) => {
    this.setState({ inStockOnly });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;

    return (
      <div>
        <h1>Product Table</h1>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;