import axios from "axios";
import { useEffect, useState } from "react";
import Card  from "./Card";

function Product() {
    const [data, setdata] = useState([]);
  const getHandler = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
          console.log(res.data)
        setdata(res.data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getHandler();
  },[]);
  return( 
    <div className="App">
    {data.map((x,i)=>{
      return (
        <>
        <Card key={i} data={x}/> 
        </>
      )
    })}
    </div>
  )
}

export default Product;
