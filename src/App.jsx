



///react-components

// Component Mount - create 
// Component update - when usestate is change or view page is change
// component unMount - deletion

/// example: when ever we go to home page to services page it we Mount (create) a services page and unMount(delete) the Home page  

// And whenever we going from service page to show page on show page we call the api this view paga is change or usestate is change it mean component is update

import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/services";




function App() {

 

  // // this use to add api data on click
  // const addProducts = () => {
  //   const api = "https://fakestoreapi.com/products";

  //   axios
  //     .post(api, {
  //       title: "new product",
  //       price: 100,
  //       category: "electronics",
  //       description: "new product description",
  //       image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  ///there is big problem the problem is apiData geting on click

  return (
    <>
       {/* <div className="p-5">
    <button className=" rounded px-5 py-2 bg-red-300" onClick={addProducts}>
      add api product
    </button>
  </div> */}

  <div className="pt-[5%] pl-[5%]">
            
      <nav className="flex justify-center gap-5">
        <Link to='/'>Home</Link>
        <Link to='/Services'>Services</Link>
        <Link to='/show'>Show</Link>
      </nav>

      <hr />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/show" element={<Show />}/>
        
      </Routes>

  </div>
   
    </>
  );
}

export default App;
