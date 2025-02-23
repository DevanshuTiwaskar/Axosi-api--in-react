
// useEffect =  directly storage ya creation nahi karta, lekin jab state change hoti hai ya component render hota hai, tab kuch kaam karne (jaise storage me data save karna ya API se data fetch karna) ke liye use hota hai.



//whenever go no services page it console the message("component is create") and wherever we go to service to any other component it show the message ("component is deleted")






//Jab useEffect me koi dependency array nahi hoti ([] ke bina), to wo har render ke baad chalti hai. Iska matlab:

// Jab bhi state (first ya second) change hoti hai, component dobara render hota hai.

// in console //

//onclick on change normal data button
// component is created
//  component is delete

//onclick on change very large data data button
//  component is created
//  component is delete
// React pehle purani effect ko cleanup karta hai (component is deleted) fir naya effect chalata hai (component is created).
// Isliye console me baar-baar ye messages dikh rahe hain.




import axios from "../utils/axios";
import { useEffect, useState } from "react"


const Services = () => {
  const [first,Setfirst] = useState('this normal data')
  const [second,Setsecond] = useState('this very large data')

  function getUser(){

  
  axios
      .get('/users')
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err));
  }; 
  
  
  
  useEffect(() => {
      getUser()
      
      console.log('component is created');

      return () => {
        console.log('component is delete')
      };
    },[second])
  // Agar aapko useEffect ko sirf ek baar chalana hai jab component pehli baar load ho (aur jab component hatao tab cleanup ho), to:

//Empty array ([]) use karo. Jaise: useEffect(() => {...}, []);
///Ye effect sirf mounting aur unmounting pe chalega, state change pe nahi.

//if you want allow componrent to re-render simply pass hook name in it [second] now it well rerender


  return (

    <>
      <h1 className="mt-3">{first}</h1>
      <button className="bg-red-400 text-white p-3" onClick={()=>Setfirst('normal data has been change')}>change normal data</button>

      <h1 className="mt-3">{second}</h1>
      <button className="bg-red-400 text-white p-3" onClick={()=>Setsecond('vary large data has been change')}>change vary lage  data</button>


    </>
      
  )
}

export default Services