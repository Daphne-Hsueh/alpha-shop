import { useState } from "react"

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

function ItemList({item}) {
  
  const [quantity,setQuantity] = useState(0)

  function handleQuantity (event) {
    if (event.currentTarget.classList.contains('plus')) {
      setQuantity(quantity + 1)

    } else if (event.currentTarget.classList.contains('minus') && quantity > 0) {
      setQuantity(quantity - 1)
    }
  }


  
  return (
    <>
      <div
        key = {item.id}
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
      >
        <img className="img-container" src={item.img} />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <img 
                src="/icons/minus.svg" 
                alt="minusIcon" 
                className="product-action minus" 
                onClick={handleQuantity}/>

              <span className="product-count">{quantity}</span>
              <img 
                src="/icons/plus.svg" 
                alt="plusIcon" 
                className="product-action plus" 
                onClick={handleQuantity}/>
            </div>
          </div>
          <div className="price">${item.price * quantity}</div>
        </div>
      </div>
    </>
  )
}

function Cart() {


  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={0}>
        {data.map (dataItem=> ( 
         <ItemList key = {dataItem.id} item ={dataItem}/>
        ))}
       
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$0</div>
      </section>
  </section>
  )
}

export default Cart