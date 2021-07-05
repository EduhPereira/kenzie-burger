import "./styles.css";
export const Product = ({ id, image, name, category, price, children }) => {
  return (
    <div className="Product">
      <img className="ProductImage" src={image} alt="" />
      <h1 className="ProductItem ProductName">{name}</h1>
      <p className="ProductItem">{category}</p>
      <p className="ProductItem">${price}</p>
      {children}
    </div>
  );
};
