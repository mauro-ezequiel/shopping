import { Pages } from "./pages";
import { useState } from "react";

export function Product() {
  const [products, setProducts] = useState([]);

  const [proPorPage, setProPorPage] = useState(4);

  const [curentP, setCurentP] = useState(1);

  const productList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const products = await data.json();
    console.log(products);

    setProducts(products);
  };

  productList();

  return (
    <section>
      <Pages />
    </section>
  );
}
