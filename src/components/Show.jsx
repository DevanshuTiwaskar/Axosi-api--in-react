import axios from "../utils/axios";
import { useEffect, useState } from "react";

const Show = () => {
  const [products, setproducts] = useState([]);
  // this use to get api data on click
  const getProducts = () => {

    axios
      .get('/products')
      .then((product) => {
        console.log(product);
        setproducts(product.data); /// data storge in a data
      })
      .catch((err) => console.log(err));
  };


  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <div className=" p-5">
        <button className=" rounded px-5 py-2 bg-red-300" onClick={getProducts}>
          call api
        </button>
      </div>

      <hr className="my-10" />


      <ul className="my-10 mb-6 p-5">
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
};

export default Show;
