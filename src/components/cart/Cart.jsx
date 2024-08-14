import React from 'react';
// import iconCart from ".src/assets/iconCart.png";
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from "./Styles";


function Cart({isToggle, setToggle}){
    return(
    <>
      <Wrapper onClick={() => setToggle(true)}> 
        <Icon icon={iconCart}/>
        <CartCount>0</CartCount>
      </Wrapper>

      <CartSideBar>
        <EmptyCart>Empty Cart</EmptyCart>
      </CartSideBar>

    </>
 );
}




export default Cart;