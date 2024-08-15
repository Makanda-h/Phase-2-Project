import React from "react";
// import iconCart from ".src/assets/iconCart.png";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardRemove,
  CardRow,
  ClearButton,
} from "./Styles";

function CartOverlay({
  isToggle,
  setToggle,
  carts,
  removeProductFromCart,
  clearCart,
}) {
  const $sideBarRef = useRef(); // create a ref for the sidebar

  // call the handleClickOutside function
  function handleClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          // if the ref is not current ***
          return;
        }

        handler();
      };

      // add event listeners
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]); // add ref and handler to the dependency array
  }

  handleClickOutside($sideBarRef, () => setToggle(false)); // call the handleClickOutside function

  return (
    <>
      <Wrapper isToggle={isToggle} ref={$sideBarRef}> 
        <Icon onClick={() => setToggle(!isToggle)}>
          <span className="material-icons">shopping_cart</span>
          <CartCount>{carts.length}</CartCount>
        </Icon>
      </Wrapper>
      <CartSideBar>
        <SideBarHeader>
          <h3>Your Cart</h3>
          <ClearButton onClick={clearCart}>Clear</ClearButton>
        </SideBarHeader>
        {carts.length > 0 ? (
          carts.map((product) => (
            <Card key={product.id}>
              <CardRow>
                <CardImage src={product.image} alt={product.title} />
                <CardBody>
                  <CardTitle>{product.title}</CardTitle>
                  <CardRemove onClick={() => removeProductFromCart(product.id)}>
                    Remove
                  </CardRemove>
                </CardBody>
              </CardRow>
            </Card>
          ))
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartSideBar>
    </>
  );
}

export default CartOverlay;
