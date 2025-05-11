import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/header/header.component";
import Axios from "../Apis/config";

const ProductsList = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    Axios.get(`/`, {
    })
      .then((response) => setProducts(response.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const filterItem = products.filter((product) => product.id !== id);
    setProducts(filterItem);
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
