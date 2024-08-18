import React from "react";
import swal from 'sweetalert';

function Checkout({ cart }) {
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); 
  //function to show alert
  function showAlert(){
    swal({
      title: "Order Placed Successfully!!",
      text: "Pay using Paybill 123456.",
      icon: "success",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Confirmed!", "Your order will be served in 5 minutes", "success");
      }
    });
  }
  
  
  //calculate the total amount of the cart
  return (
    <div className="checkout-card">
      <h1>Checkout</h1>
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Subtotal: {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>Total Amount: {totalAmount}</h2>
      <button onClick={showAlert}>Place Order</button>
    </div>
  );
}
export default Checkout;
