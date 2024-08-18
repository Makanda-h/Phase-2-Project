import React from "react";

function Cart({ cart, updateCart }) {
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // calculate the total amount of the cart

  const incrementQuantity = (productId) => {
    updateCart(productId, 1); // increases the quantity of the product
  };
  
  const decrementQuantity = (productId) => {
    updateCart(productId, -1); // decreases the quantity of the product
  };
// display the cart items returned jsx
  return (
    <>
      <div>
        <h1> Mini Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <div className="quantity-control">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <p>Price:  {item.price}</p>
              <p>Subtotal: {item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <h1>Total Amount:   {totalAmount}</h1>
      </div>
    </>
  );
}

export default Cart;
