import React from 'react';
import PropTypes from 'prop-types';

const ProductCategoryRow = ({ category }) => (
  <tr><th cellSpacing="12">{category}</th></tr>
)

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
}

export default ProductCategoryRow;