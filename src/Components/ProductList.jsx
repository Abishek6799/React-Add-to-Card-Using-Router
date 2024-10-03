import React from 'react';
import ProductCart from './ProductCart';

const ProductList = ({ products, addToCart, cart, removeFromCart }) => {
    const cartItemIds = new Set(cart.map(item => item.id)); // Create a Set of cart item IDs for quick lookup

    return (
        <div className="bg-slate-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -mt-5 absolute pt-32 px-8 pb-10 gap-6">
            {products.map(product => (
                <ProductCart 
                    key={product.id} 
                    product={product} 
                    addToCart={addToCart} 
                    removeFromCart={removeFromCart}
                    isInCart={cartItemIds.has(product.id)} // Check if product is in cart
                    quantity={cartItemIds.has(product.id) ? cart.find(item => item.id === product.id).quantity : 0} // Get the quantity if in cart
                />
            ))}
        </div>
    );
};

export default ProductList;
