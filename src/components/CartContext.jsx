
import { createContext, useContext, useState } from 'react';

 export let totalprice;

export const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 1,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

  const [quantities, setQuantities] = useState({});
  const handleQuantityChange = (id, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantity
    }));
  };

  const calculateTotalPrice = (data) => {
    return data.reduce((total, item) => {
      const itemTotal = (quantities[item.id] || 0) * item.price;
      totalprice = total + itemTotal
      return totalprice;
    }, 0);
  };

  const contextValue = {
    quantities,
    handleQuantityChange,
    calculateTotalPrice
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);

 