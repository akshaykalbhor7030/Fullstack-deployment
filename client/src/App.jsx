import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const backendCall = async () => {
      const res = await axios.get("http://localhost:4000/api/message");
      console.log("response is:", res);
      setMessage(res.data.message);
    };
    backendCall();
  }, []);

  return (
    <>
      <h1> This is my first application hosted on a VPS server</h1>
      <p>Data: {message}</p>
    </>
  );
}

export default App;
