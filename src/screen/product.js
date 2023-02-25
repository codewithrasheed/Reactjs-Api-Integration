import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function Product() {
  const [data, setdata] = useState([]);
  const [Query, setQuery] = useState("");
  const getHandler = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getHandler();
  }, []);
 
  return (
      <div className="App">
      <input
    type="text"
    placeholder="Search Product By Name..."
    className="search"
    onChange={(e) => setQuery(e.target.value)}
    />
    <div className="pro">
      {data
        .filter((dat) => dat.title.toLowerCase().includes(Query))
        .map((x, i) => {
          return (
            <>
              <Card key={i} data={x} />
            </>
          );
        })}
    </div>
            </div>
  );
}

export default Product;
