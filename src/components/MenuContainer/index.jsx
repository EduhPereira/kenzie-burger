import "./styles.css";
import { Product } from "../Product";
export const MenuContainer = ({ products, showSale, handleCartTotal }) => {
  return (
    <div className="MenuContainer">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            >
              <button
                className="ProductBtn"
                onClick={() => {
                  showSale({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                  });
                  handleCartTotal(
                    {
                      id: product.id,
                      name: product.name,
                      category: product.category,
                      price: product.price,
                    },
                    product.price
                  );
                }}
              >
                add
              </button>
            </Product>
          </div>
        );
      })}
    </div>
  );
};
