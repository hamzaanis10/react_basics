import { useState } from "react";
import axios from "axios";

const Task2 = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    fetchWeather();
  };

  const fetchWeather = async () => {
    const data = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=feece87973944f47877124543231202&q=${input}&aqi=no`
    );
    setData(data.data);
    console.log(data.data);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick} className="btn btn-primary mb-5">
        Search
      </button>

      {data && (
        <div>
          <h2>{data.location.name}</h2>
          <p>{data.location.region}</p>
          <img src={data.current.condition.icon}></img>
          <p>
            {data.current.temp_c} C<sup>o</sup>
            {data.current.condition.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Task2;
