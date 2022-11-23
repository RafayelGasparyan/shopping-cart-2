import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from '../Products/Products'
import Signup from '../Signup/Signup'
import Cart from '../Cart/Cart'
import Login from '../Login/Login'

const RoutesRouter = ({data,cartItems,handleAddProduct,handleRemoveProduct,name}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products data={data} handleAddProduct={handleAddProduct}/>}/>
            <Route path='/registr' element={<Signup name={name}/>}/> 
            <Route path='/cart'
             element=
             {<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/> } />
        </Routes>
    </div>
  )
}

export default RoutesRouter;
