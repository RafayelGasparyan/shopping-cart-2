import React from 'react'

const Products = ({data,handleAddProduct}) => {
  return (
    <div className='products'>
        {data.map((product) => (
            <div className='cart'>
                <div>
                    <img 
                        className='product-image' 
                        src={product.img} 
                        alt={product.name}/>
                </div>
                <div>
                    <h3 className='product-name'>{product.name}</h3>
                </div>
                <div className='product-price'>${product.price}</div>
                <div>
                    <button 
                    className='product-add-button' onClick={() => handleAddProduct(product)}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
  )
}


export default Products;