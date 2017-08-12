// External Depedencies
import React from 'react';
import { shallow } from 'enzyme';

// Our Dependencies
import { expect } from '../../utils/chai';
import { generateProductList } from '../../utils/testData';

// Our Component
import FilterableProductTable from './index';

describe('FilterableProductTable', () => {
  let wrapper;
  const products = generateProductList();

  // Render the component in the beforeEach so
  // each test can get a new shallow rendered wrapper
  beforeEach(() => {
    wrapper = shallow(
      <FilterableProductTable 
        products={products}
      />
    )
  });

  // Checking the intitial state
  it('should initialize the filterText state to an empty string', () => {
    expect(wrapper).to.have.state('filterText').to.equal('');
  });

  it('should initialize the inStockOnly state to false', () => {
    expect(wrapper).to.have.state('inStockOnly').to.equal(false);
  })
});