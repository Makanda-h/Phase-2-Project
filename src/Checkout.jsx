import React from 'react';

function Checkout({cart}){
    const totalAmount = cart.reduce((total, item)=> total+(item.price*item.quantity),0);
    return(
        <div>
            <h1>Checkout</h1>
            <div className="checkout-items">
                {cart.map(item =>{
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} alt={item.name}/>
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                        <p>Subtotal: {item.price*item.quantity}</p>
                    </div>
                })}
                <h2>Total Amount: {totalAmount}</h2>
                <button onClick={()=> alert('Order Placed Successfully!For M-Pesa payments, use BUY GOODS:1111')}>Place Order</button>
            </div>
        </div>
    );
}
export default Checkout;