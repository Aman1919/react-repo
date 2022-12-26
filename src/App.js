import { useState } from "react";
import Card from "./card";
function App() {
  const [data, setData] = useState([]);
  const [inpt, setInput] = useState("");
  // useEffect(() => {
  // async function getapi() {
  // // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // let a = await res.json();
  // setData(a);
  // }
  // getapi();
  // }, []);
  function getapi() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setData(users));
    // getting fetching data from api
  }
  getapi();
  // In filterdata filtering data through checking inpt and name whose should be included
  const filterData = data.filter((d) => {
    return (
      d.name.toLowerCase().includes(inpt.toLowerCase()) ||
      d.email.toLowerCase().includes(inpt.toLowerCase())
    );
  });
  return (
    <div>
      <h1 className="header">RoboFriends</h1>
      <div className="inpt">
        <h1>{inpt}</h1>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search through names"
        />
      </div>
      <Card carddata={filterData} />
    </div>
  );
}

export default App;
