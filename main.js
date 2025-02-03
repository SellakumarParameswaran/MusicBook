
import './App.css';
import Product from './../src/Product';
import Cart from './../src/card';
import React, { useState } from 'react';





function Main() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Acoustic Guitar' , model: 'Model : ce032  made in india', price: '420 ',imageSrc:'https://media.mydukkan.com/image/36364/Cort.CortGoldA636364.jpg'},
    { id: 2, name: 'capo&string', model: 'Brand Name : Alice!44', price: '25', imageSrc: 'https://i.pinimg.com/originals/12/0a/c6/120ac685f464d7b7795554ddb4ea6104.jpg'},
    { id: 3, name: 'Tuner',  model: 'Brand : Giperan  Quality : standard', price: '13',imageSrc: 'https://th.bing.com/th/id/OIP.vZWMsaa3ZfS4Gk2IJXxPsAHaEc?w=500&h=300&rs=1&pid=ImgDetMain' },
    { id: 4, name: 'piano ' , model: 'Model : Yamaha 1000t', price: '400 ',imageSrc:'https://th.bing.com/th/id/OIP.1k8CAtgBdMJUUUPv-KHCnQHaG7?w=273&h=195&c=7&r=0&o=5&pid=1.7'},
    { id: 5, name: 'piano Tuner' , model: 'Model : bangkoki', price: '40 ',imageSrc:'https://www.philatuner.com/wp-content/uploads/2020/03/AdobeStock_42641448.jpeg'},
    { id: 1, name: 'Flute' , model: 'Model : Bambo made in india', price: '35 ',imageSrc:'https://th.bing.com/th/id/OIP.JWFR5OT0ywuct-N9G_iYAQHaFj?w=1500&h=1125&rs=1&pid=ImgDetMain'},

  ];


    
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  const buyNow = () => {
    alert('Please !  click to Pay your bill');
    setCartItems([]);

  };

  return (
    <>
    
    
     
       
          <h2>Music Instruments </h2>
         
          
          


            {products.map((product) => (
              <Product
             
                key={product.id}
                name={product.name}
                model={product.model}
                price={product.price}
                imageSrc={product.imageSrc}
                onAddToCart={() => addToCart(product)}
              />
            ))}
<Cart items={cartItems} onBuy={buyNow} />

  </>
  );
}
export default Main;

