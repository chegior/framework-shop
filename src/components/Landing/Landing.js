import React from "react";
import { connect } from "react-redux";

import "./Landing.css";

import { addToCart } from "../../ducks/product";
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import { Link } from "react-router-dom";

export function Landing( { addToCart, featuredProducts } ) {
	const products = featuredProducts.map( (pro)=> (
		<FeaturedProduct
			addToCart={ ()=> addToCart( pro.id)}
			description={ pro.description}
			key={ pro.id }
			logo={ pro.logo }
			name={ pro.name }
			onSale={ pro.omSale }
			price={ pro.price }
		/>
	));

	return (
		<main className="landing">
			<h1>Featured Products</h1>
			<div className="landing__products-wrapper">
				{products}
			</div>
			<Link to="/shop" className="landing__full-shop-link">
				<h1 className="landing__full-shop-link">Take me to the full shop!</h1>
			</Link>
		</main>
	);
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
