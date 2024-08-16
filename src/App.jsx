import React from 'react';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <NavBar />
      <Cart>
        <Checkout />
      </Cart>
    </div>
  );
}
export default App;