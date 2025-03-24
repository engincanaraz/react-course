import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
      <ProductItem
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU"
          productName="Soda"
          productPrice="40"
        />
        <ProductItem
           imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU"
          productName="Çilek"
          productPrice="30"
        />
      </div>
      
    </div>
  );
}

export default Products;
