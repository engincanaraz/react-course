import "./ProductItem.css";

function ProductItem() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU";
  const productName = "Soda";
  const productPrice = 4;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice} TL</span>
      </div>
    </div>
  );
}
export default ProductItem;
