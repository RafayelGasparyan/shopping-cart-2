import './App.css';
import {useState} from 'react';
import Header from './Components/Header/Header';
import RoutesRouter from './Components/RoutesRouter/RoutesRouter';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [name,setName] = useState('');
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
    (async ()=> {
      const {data} = await axios.get("http://localhost:3000/api/user")
      setName(data.name)
    })()
  }, []);
  const [data,setData] = useState([
    {
      id:Math.random(),
      name:'Kulon',
      price:10,
      img:"./Pics/gold1.jpg"
    },
    {
      id:Math.random(),
      name:'Braslet',
      price:20,
      img:"./Pics/gold2.jpg"
    },
    {
      id:Math.random(),
      name:'Matani',
      price:30,
      img:"./Pics/gold3.jpeg"
    },
    {
      id:Math.random(),
      name:'Jam',
      price:40,
      img:"./Pics/gold4.jpg"
    },
    {
      id:Math.random(),
      name:'Kole',
      price:50,
      img:"./Pics/gold5.jpg"
    },
    {
      id:Math.random(),
      name:'Oxer',
      price:60,
      img:"./Pics/gold6.jpg"
    }
  ])

  function handleAddProduct(product) {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ?  {...ProductExist,quantity:ProductExist.quantity + 1} 
        :  item
        )
      );
      } else {
      setCartItems([...cartItems,{...product,quantity:1}])
    }
  };

  const  handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id
         ? {...ProductExist,quantity:ProductExist.quantity - 1}
         : item)
      )
    }
   } 
  


  return (
    <div>
        <Header/>
        <RoutesRouter
          data={data}
          setData={setData} 
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          />
    </div>
  )
}

export default App;
