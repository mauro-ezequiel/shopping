import "./App.css";

import { Bottom } from "./components/bottom";
import { Product } from "./components/products";

function App() {
  return (
    <>
      <section>
        <header>
          <h1 className="title ">
            SHOPPING
            <h2 className="title two ">
              of products
              <h3 className="title ">FASHION</h3>
            </h2>
          </h1>
          <p className="p ">the most refined 1st line quality with guarantee</p>
        </header>

        <a href="https://wa.me/541150941389" id="btn" target="-blank">
          <i className="b bi-whatsapp" />
        </a>
        <Product />
      </section>
      <Bottom />
    </>
  );
}

export default App;
