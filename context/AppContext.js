import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

export function AppProvider(props) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // Check if we are inside of the browser before we access the localStorage
    if (process.browser) {
      let cartData = localStorage.getItem('woocommerce-cart');
      cartData = null !== cartData ? JSON.parse(cartData) : '';
      setCart(cartData);
    }
  }, []);
  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  );
}
