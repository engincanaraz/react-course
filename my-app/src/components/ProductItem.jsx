import "./ProductItem.css";

function ProductItem(props) {

  const { imageUrl, productName, productPrice } = props;
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
