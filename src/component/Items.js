import ProductItem from '../component/ProductItem'

import { useEffect, useState } from "react";

export default function Items(props){

    const [newItemsCart,setNewItemsCart]=useState([]);

    useEffect(()=>{
        const ProductCart=JSON.parse(localStorage.getItem('CartShopping'));
        if(ProductCart.length>0){
            setNewItemsCart(ProductCart);
        }
    },[props.changeCart]);


    const addToCart=(product)=>{
     const num=newItemsCart.length ? newItemsCart[newItemsCart.length -1].num + 1 :1;
     const newProductInCart={num,id:product._id,name:product.name};
     const listItems=[...newItemsCart,newProductInCart];
     setNewItemsCart(listItems);
    
     // this effect cart --- change variable that = local storage
     props.setChangeCart(num);

     localStorage.setItem('CartShopping',JSON.stringify(listItems));
    //  console.log(newProductInCart); 
    //  console.log(listItems); 
    }
    return(
        <> 
        <div className="bg-dark p-3 border">
            {props.loading && (<div className='alert alert-success'>Loading ....</div>)}
            {!props.loading && props.error && (<div className='alert alert-danger'>{props.error}</div>)}
                {Array.isArray(props.item) && props.item.map((ele,index)=>{
                return(<div key={index} >
                        <h3 className='text-light m-2 p-2 rounded bg-teal'>{ele.name}</h3>
                        <div className="row p-2 text-light">
                            {props.product.filter((e)=>e.ItemId._id===ele._id).map((product,index)=>{
                                return(
                                <ProductItem  key={index} isProduct={product} name={product.name} price={product.price} desc={product.Descripe} img={product.img} handelCart={()=>{addToCart(product)}} />
                                )
                            })}
                        
                        </div>
                            
                    <hr className='text-light' />    
                </div>)
                })}
            </div>
        </>
       
    );
}
