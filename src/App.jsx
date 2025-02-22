import axios from "axios";
import { useState } from "react";



///react-components

// Component Mount - create
// Component update
// component unMount - deletion



function App() {
  const [products, setproducts] = useState([]);

  // this use to get api data on click
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((product) => {
        console.log(product);
        setproducts(product.data); /// data storge in a data
      })
      .catch((err) => console.log(err));
  };

  // this use to add api data on click
  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "new product",
        price: 100,
        category: "electronics",
        description: "new product description",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  ///there is big problem the problem is apiData geting on click

  return (
    <>
      <div className=" p-5">
        <button className=" rounded px-5 py-2 bg-red-300" onClick={getProducts}>
          call api
        </button>
      </div>

      <div className="p-5">
        <button className=" rounded px-5 py-2 bg-red-300" onClick={addProducts}>
          add api product
        </button>
      </div>
      <hr className="my-10" />
      <ul className="my-10 p-5">
        
        {products.length > 0 ? (
          products.map((p, index) => (
            <li key={index} className="w-1/4 p-5 bg-red-200 ">
              {p.title}
            </li>
          ))
        ) : (
          <h1>loading...</h1>
        )}

      </ul>
    </>
  );
}

export default App;
