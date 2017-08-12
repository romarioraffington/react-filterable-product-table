// External Depedencies
import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

// Our Dependencies
import { expect } from '../../../utils/chai';
import { generateProductList } from '../../../utils/testData';

// Our Component
import SearchBar from './index';

describe('SearchBar', () => {
  let wrapper;
  
  // Mock functions
  const onFilterTextInput = jest.fn(),
    onInStockInput = jest.fn(),
    
    // Get random lorem text
    filterText = faker.lorem.word();

  // Render the component in the beforeEach so
  // each test can get a new shollow rendered wrapper
  beforeEach(() => {
    wrapper = shallow(
      <SearchBar 
        onFilterTextInput={onFilterTextInput}
        onInStockInput={onInStockInput}
        filterText={filterText}
        inStockOnly={false}
      />
    )
  });

  // Clear the mocked function 
  // after each test
  afterEach(() => {
    onFilterTextInput.mockClear();
    onInStockInput.mockClear();
  });

  it('should initialize the value of search input to the filterText value', () => {
    const input = wrapper.find('input').first();
    expect(input).to.have.value(filterText);
  })

  describe('when the user enters text in the search bar input feild', () => {
   let value;

    beforeEach(() => {
      value = faker.lorem.word();
      const input = wrapper.find('input').first();

      input.simulate('change', {
        target: { value }
      });
    });

    it('should call onFilterTextInput once', () => {
      expect(onFilterTextInput.mock.calls.length).to.equal(1);
    });

    it('should call the onFilterTextInput with the correct value', () => {
      expect(onFilterTextInput.mock.calls[0][0]).to.equal(value);
    });
  });

  describe('when the user enters text in the search bar', () => {
    let checkbox;

    beforeEach(() => {
       checkbox = wrapper.find('p input').first();
       checkbox.simulate('change', {
         target: { checked: true }
       });
     });
 
     it('should call onInStockInput once', () => {
       expect(onInStockInput.mock.calls.length).to.equal(1);
     });
 
     it('should call the onFilterTextInput with the correct value', () => {
       expect(onInStockInput.mock.calls[0][0]).to.equal(true);
     });
   });

   describe('when the inStockOnly is set to true', () => {
     beforeEach(() => {
       wrapper.setProps({
         inStockOnly: true,
       });
      });

    it('should check the "Only show products in stock" checkbox ', () => {
      const checkbox = wrapper.find('p input').first();
      expect(checkbox).to.be.checked();
    });
   })
});