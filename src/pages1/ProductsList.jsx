import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Axios from "../Apis/config";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    Axios.get(`/`)
      .then((response) => setProducts(response.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const filterItem = products.filter((product) => product.id !== id);
    setProducts(filterItem);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct?.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Products</h3>
        <span className="badge bg-secondary">Cart: {cart.length}</span>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard
              product={product}
              onDelete={handleDelete}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;