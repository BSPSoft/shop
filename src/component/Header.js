import { useState } from 'react';
import shop from '../Shop.png';
import cart from '../Shopping_Cart.png';


function Header(props){

   const [isGroupCart,setIsGroupCart]=useState(false);
    //  showListCart
    const showListCart=(toggle)=>{
      toggle=!toggle;
      setIsGroupCart(toggle);
    }

    
    
    return(
        <div className="navbar bg-teal p-1 text-light header w-100">
          <div className='navbar'>
           <img src={shop} width={50} alt='shop app'/>
           <h1 className='ms-4'>Shopping</h1>
          </div>

           <button onClick={()=>{showListCart(isGroupCart)}} className="btn btn-dark me-4 rounded-circle postion-relative">
              <img src={cart} alt="cart" width={25}/>
              <span className='items rounded-circle'>{props.countProductCart}</span>
           </button>
           {isGroupCart && (
            <div className='list-items'>
               <ul className='list-group'>
                {props.listCart.map((ele,index)=>{
                  return(
                    <li key={index} className='list-group-item mt-1 hover'>{ele.name}</li>
                  )

                })}
               </ul>
               <button className='btn btn-danger m-2 w-70'>Payment</button>
            </div>
           )}

        </div>
    );
}

// export function GroupCart(){
//   return(
//   <div className='list-items'>
//     <ul className='list-group'>
//        <li className='list-group-item mt-1 hover'>item1</li>
//        <li className='list-group-item mt-1 hover'>item1</li>
//        <li className='list-group-item mt-1 hover'>item1</li>
//     </ul>
//     <button className='btn btn-danger m-2 w-70'>Payment</button>
//   </div>
//   );
// }


export default Header;
