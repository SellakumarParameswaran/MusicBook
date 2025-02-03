import React from "react";
import './Product.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Product({ name, price,imageSrc, model,onAddToCart }) {
    return (
      <>
        <div className="product">
         
    
   
            <div> <img src={imageSrc}  className="pimgtop" alt={name} /></div>
           
           
           
       
            <button className="btn btn-danger" onClick={onAddToCart}>Add to Cart</button></div>
          <h3 className="ptitle">{name}</h3>
        
          <h5 className="pdis">{model}
              </h5>
          <h4>Price :{price}</h4>




          </>
      );
  }


  export default Product;
  