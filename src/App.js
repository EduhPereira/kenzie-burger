import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/MenuContainer";
import { MdRestaurantMenu } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_L.jpg",
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCs0-3tU1KE3QqlHwsxlPbf8zrmHtxDuobw&usqp=CAU",
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
    },
    {
      id: 3,
      image:
        "https://admin.cmpedidos.com.br/foto/390/produtos/x-salada-picanha-39822.jpg",
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
    },
    {
      id: 4,
      image: "https://static.tonolucro.com/images/anuncio/A5b23c15db64b8.jpg",
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
    },
    {
      id: 5,
      image:
        "https://majoricario.com.br/site/wp-content/uploads/2021/02/Guarana.png",
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/originals/2a/ab/ca/2aabca30a6e2c88e925fa700f091b18f.jpg",
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
    },
    {
      id: 7,
      image:
        "https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/R/46ed4d0f-eb0.png",
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
    },
  ]);

  const [inputContent, setInputContent] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = () => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase() === inputContent.toLowerCase() ||
          product.category.toLowerCase() === inputContent.toLowerCase()
      )
    );
  };
  const cleanFilter = () => {
    setFilteredProducts([]);
    setInputContent("");
  };

  const showSale = (sale) => {
    const { id: newId } = sale;
    const result = currentSale.find((element) => element.id === newId);
    result === undefined && setCurrentSale([...currentSale, sale]);
  };

  const handleCartTotal = (sale, price) => {
    const { id: newId } = sale;
    const result = currentSale.find((element) => element.id === newId);
    result === undefined && setCartTotal(cartTotal + price);
  };

  return (
    <div className="App">
      <Header />
      <section className="Menu">
        <h2 className="HeaderSection">
          <MdRestaurantMenu className="Icon" />
          <input
            type="text"
            value={inputContent}
            className="SearchItemInput"
            placeholder="Search by Name or Category"
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
          />
          <button className="Btn" onClick={showProducts}>
            <FaSearch />
          </button>
          <button className="Btn" onClick={cleanFilter}>
            <GiBroom />
          </button>
        </h2>
        <div className="MenuItems">
          {filteredProducts.length > 0 ? (
            <MenuContainer
              products={filteredProducts}
              showSale={showSale}
              handleCartTotal={handleCartTotal}
            />
          ) : (
            <MenuContainer
              products={products}
              showSale={showSale}
              handleCartTotal={handleCartTotal}
            />
          )}
        </div>
      </section>
      <section className="Bag">
        <h2 className="HeaderSection">
          <div className="Price">
            <FaShoppingBag />${cartTotal.toFixed(2)}
          </div>
          <button
            className="Btn CleanBag"
            onClick={() => {
              setCurrentSale([]);
              setCartTotal(0);
            }}
          >
            <GiBroom />
          </button>
        </h2>

        <div className="List">
          {currentSale.map((sale) => {
            return (
              <div key={sale.id} className="BagItem">
                <h1 className="BagItemInfo BagItemInfo--Name">{sale.name}</h1>
                <p className="BagItemInfo">{sale.category}</p>
                <p className="BagItemInfo">${sale.price}</p>
                <button
                  className="Btn Remove"
                  onClick={() => {
                    setCartTotal(cartTotal - sale.price);
                    setCurrentSale(
                      currentSale.filter((item) => item.id !== sale.id)
                    );
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
