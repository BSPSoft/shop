import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import Header from "./component/Header";
import Items from './component/Items';

function App() {
    const [item,setItems]=useState([]);
    const [product,setProduct]=useState([]);

    const [Cart,setCart]=useState([]);
    const [changeCart,setChangeCart]=useState(0);


    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchItems=async()=>{
        try{
            setLoading(true);
            const response=await axios.get('http://localhost:4000/items');
            setItems(response.data);
        }catch(ex){
          setError(ex.message);
        }
           setLoading(false)
       
     }
   fetchItems();
    },[]);

    useEffect(()=>{
        const fetchProducts=async()=>{
        try{
            setLoading(true);
            const response=await axios.get('http://localhost:4000/products');
            setProduct(response.data);
        }catch(ex){
            setError(ex.message);
        }
            setLoading(false)
        
       
     }
   fetchProducts();
    },[]);


    useEffect(()=>{
        const cartOptions=(e)=>{
          const ProductCart=JSON.parse(localStorage.getItem('CartShopping'));

          if(ProductCart.length <= 0)
           {
            setChangeCart(0);
            return;
           } else{
            setChangeCart(ProductCart.length);
           }
           
          // console.log('length',ProductCart.length)
          // console.log('change',changeCart)

          setCart(ProductCart);
    }
    cartOptions();

    },[changeCart])

  
  return (
    <div className="">
      <Header countProductCart={changeCart} listCart={Cart}/>
      <div className="p-1 bg-light mt-3"></div>
      <br/>
      <br/>
      <br/>
      <Items item={item} product={product} loading={loading} error={error} setChangeCart={setChangeCart} changeCart={changeCart}/>
    </div>
  );
}

export default App;
