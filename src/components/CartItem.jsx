export default function CartItem({ item, quantity, onQuantityChange }) {
  // Handler for incrementing and decrementing quantity
  const handleQuantityChange = (event) => {
    if (event.currentTarget.classList.contains('plus')) {
      onQuantityChange(quantity + 1);
    } else if (event.currentTarget.classList.contains('minus') && quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <>
      <div
        key={item.id}
        className="product-container col col-12"
        data-count={item.quantity} 
        data-price={item.price}
      >
        <img className="img-container" src={item.img} alt={item.name} />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <img 
                src="/icons/minus.svg" 
                alt="Minus Icon" 
                className="product-action minus" 
                onClick={handleQuantityChange}/>

              <span className="product-count">{quantity}</span>

              <img 
                src="/icons/plus.svg" 
                alt="Plus Icon" 
                className="product-action plus" 
                onClick={handleQuantityChange}/>
            </div>
          </div>
          <div className="price">${item.price * quantity}</div>
        </div>
      </div>
    </>
  );
}