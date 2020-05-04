import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const ACCESS_KEY = "AqIOXuxuXbGsDMWeOFk_qutvHKXzJ1TcOlIsTJHe_ak";

  const fetchImage = () => {
    fetch(
      `http://api.unsplash.com/photos?client_id=${ACCESS_KEY}&orientation=portrait&order_by=latest&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  };
  return (
    <div className="App">
      <div className="mydiv"> 
      <h1>Search HD Photos</h1>
        <button onClick={() => fetchImage()}>Find Image</button> </div>
        <div className="gallery">
          {results.map((item) => {
            return (
              <img
                className="item"
                src={item.urls.regular}
                key={item.id}
                alt="Loading"
              />
            );
          })}
        </div>
    </div>
  );
}

export default App;
