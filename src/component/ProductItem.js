
function ProductItem(props){

   
    return(
    <div className="col-md-4 col-sm-6">
        <div className="card w-60 mt-4">
            <div className="card-header">
              <img src={"./"+props.img} alt="item" className="card-img-top" height={150} />
            </div>
            <div className="card-body">
               <h5>{props.name}</h5>
               <p className='card-title'>
                 {props.desc}
               </p>
               <button className='btn  btn-outline-success' onClick={props.handelCart}>Add to cart</button>
               <span className="price">{props.price} $</span>

            </div>
        </div>
    </div>
    );
}
export default ProductItem;