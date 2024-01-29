const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function Item() {
  
  const cartItems = data.map(item =>

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
            <object
              className="product-action minus"
              data="/icons/minus.svg"
            />
            <span className="product-count">{item.quantity}</span>
            <object
              className="product-action minus"
              data="icons/plus.svg"
            />
          </div>
        </div>
        <div className="price">${item.price}</div>
      </div>
    </div>
    
    )
  return <>{cartItems}</> 
}

function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={0}>
        <Item/>
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