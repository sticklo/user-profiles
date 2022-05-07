import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data[0]);

  return (
    <div className="App">
      {data.map((item) => (
        <div key={item.id} className="card-wrap" >
          <Card data={item} />
        </div>
      ))}
    </div>
  );
}

export default App;