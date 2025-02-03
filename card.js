
import React, { useState } from 'react';
import './card.css';

function Card({ items }) {
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    const [cartItems, setCartItems] = useState([]);
    
 
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  


    return (
      <>
      
        <div className="card">
              <h2 className="cardtitle ">Add Card to Buy</h2>
              <ul className="listgroup">
                {items.map((item, index) => (
                  <li key={index} className="list-group-item">{item.name} - ${item.price}</li>
                ))}
              </ul>
              <h3 className="Price">Total Price: ${totalPrice}</h3>
          
            </div>
            
         
            <a href="http://localhost:3000/Pay"  className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{margin:'40px 80px',fontSize:'30px'}}>
Conform to Pay
</a>
<h2>20 % Offers % Available Here</h2>
       </>
      );
  }
  export default Card;