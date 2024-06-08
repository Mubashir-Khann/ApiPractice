import { useState } from "react";
import "./App.css";
import axios from "axios";
import BAGrid from "./pages/card";
import RouteFile from "./pages/Routers";

function App() {
  const [usersList, setUsersList] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const getApiData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res, "Success Response");
        setUsersList([...res.data]);
        setError(null);
      })
      .catch((err) => {
        console.error(err, "Error");
        setError("Failed to fetch data");
      });
  };

  return (
    <div>
      <div>
        <button onClick={getApiData}>Get Data</button>
        {error && <p>{error}</p>}
      </div>
      <div>
        <BAGrid datasource={usersList} />
      </div>
      <RouteFile />
    </div>
  );
}

export default App;
