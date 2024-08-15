// function Products() {
//     return (
//       <>
//         <header>
//           {/* Save space for NavBar */}
//         </header>
//         <main>
//           <h1>This is my about component!</h1>
//         </main>
//       </>
//     );
//   };

//   export default Products;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Wrapper,
  OverlayWrapper,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  Icon,
} from "./Styles";

function Product({ addProductToCart, ...props }) {
  const [isHover, setHover] = useState(false); // set the initial state of the hover to false

  const handleMouseEnter = () => setHover(true);// create a function to handle the mouse enter event
  const handleMouseLeave = () => setHover(false);// create a function to handle the mouse leave event

  return (
    <Wrapper
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHover && (
        <OverlayWrapper onClick={() => addProductToCart({ ...props })}>
          <Icon>
            <i class="bi bi-bag">{}</i>
          </Icon>
        </OverlayWrapper>
      )}

      <Card>
        <CardImage src={props.imageURL} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardPrice>${props.price}</CardPrice>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
export default Product;