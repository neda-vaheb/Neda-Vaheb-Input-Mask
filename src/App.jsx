import { useState } from "react";

import cities from "./cities.json";
import Input from "./Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState([]);

  const handelChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filteredCities = cities.filter((city) => city.startsWith(value));
      setHint(filteredCities);
    } else {
      setHint([]);
    }
  };
  return (
    <>
      <h1>Search The City</h1>

      <Input handleChange={handelChange} hint={hint} />
    </>
  );
}

export default App;
