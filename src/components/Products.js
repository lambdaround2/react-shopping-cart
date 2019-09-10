import React, { useContext } from 'react';

// Components
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
	const { products } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product />
			))}
		</div>
	);
};

export default Products;
