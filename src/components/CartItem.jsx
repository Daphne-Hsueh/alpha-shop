import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartItem({ item, quantity }) {
  const { handleQuantityChange } = useContext(CartContext)

  const handleQuantityUpdate = (modifier) => {
    const newQuantity = modifier === 'plus' ? quantity + 1 : Math.max(quantity - 1, 0);
    handleQuantityChange(item.id, newQuantity);
  };

   return (
    <div className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
      <img className="img-container" src={item.img} alt={item.name} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img 
              src="/icons/minus.svg" 
              alt="Minus Icon" 
              className="product-action minus" 
              onClick={() => handleQuantityUpdate('minus')}/>

            <span className="product-count">{quantity}</span>

            <img 
              src="/icons/plus.svg" 
              alt="Plus Icon" 
              className="product-action plus" 
              onClick={() => handleQuantityUpdate('plus')}/>
          </div>
        </div>
        <div className="price">${item.price * quantity}</div>
      </div>
    </div>
  );
}
