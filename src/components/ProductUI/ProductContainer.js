import React, { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/ProductUI/ProductCard'
import axios from 'axios';

const ProductContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products?limit=30').then(response => {setProducts(response.data)
      }).catch(err => setError(err)).finally(() => {
          setLoading(false);
        })
    },[setProducts])
  if (loading) {
    return <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>; 
  }
    if (error || !Array.isArray(products)) {
        return <h2>There was an error loading your products!</h2>;
      }else
    return (
        <>
            {products.map((product) => (
            <Fragment key={product.id}>
              <ProductCard product={product}/>
            </Fragment>
          ))}
        </>
    );
};
export default ProductContainer;