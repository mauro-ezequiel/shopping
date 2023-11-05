import { Pages } from "./pages";
import { useEffect, useState } from "react";
import "../style/products.css";

export function Product() {
  const [products, setProducts] = useState([]);

  const [proPorPage, setProPorPage] = useState(4);

  const [curentP, setCurentP] = useState(1);

  const [search, setSearch] = useState("");

  const [totalP, setTotalP] = useState(20);
  const lastIndex = curentP * proPorPage;
  const firtsIndex = lastIndex - proPorPage;

  const productList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const products = await data.json();
    console.log(products);

    setProducts(products);
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <section>
      <div className="products x">
        {products.map((product) => (
          <div className="card-product " key={product.id}>
            <figure className="container-img">
              <img src={product.image} alt={product.title} />
            </figure>
            <h1 className="info-products">{product.title}</h1>

            <h1 className="price">
              {"$"}
              {product.price}
            </h1>
            <button className="button">añadir</button>
          </div>
        ))}
      </div>
      <Pages
        setCurentP={setCurentP}
        proPorPage={proPorPage}
        curentP={curentP}
        totalP={totalP}
      />
    </section>
  );
}
