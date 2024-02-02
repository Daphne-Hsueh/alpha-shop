import { useState } from "react"
import CartItem from "./CartItem"

const data = [
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

function Cart() {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantity
    }));
  };

  const calculateTotalPrice = () => {
    return data.reduce((total, item) => {
      const itemTotal = (quantities[item.id] || 0) * item.price;
      return total + itemTotal;
    }, 0);
  };

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12">
        {data.map(dataItem => (
          <CartItem
            key={dataItem.id}
            item={dataItem}
            quantity={quantities[dataItem.id] || 0}
            onQuantityChange={(quantity) => handleQuantityChange(dataItem.id, quantity)}
          />
        ))}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${calculateTotalPrice()}</div>
      </section>
    </section>
  );
}

export default Cart