import React, { useState, useEffect, useRef } from "react";

const Task1 = () => {
  const [name, setName] = useState("");
  const counterRef = useRef(0);
  const prevName = useRef("");

  useEffect(() => {
    counterRef.current = counterRef.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1>Renders: {counterRef.current}</h1>
      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h1>Previous State is: {prevName.current}</h1>
    </div>
  );
};

export default Task1;
