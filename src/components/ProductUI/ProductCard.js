import React from 'react';
import '../ProductUI/App.css'

const ProductCard = ({product}) => {
    console.log(product, 'props from Container') 
    return (
        <>
              <div className="card">
                <img src={product.image} alt="..." />
                    <h5 style={{color:'#6B7AA1'}}>{product.title}</h5><br/>
                    <p style={{fontWeight:'bold'}}>	&#8373; {product.price}</p>
                    <button type='button' className='contactSellerBtn button4'>BUY</button>
              </div>
              
        </>
    );
};

export default ProductCard;