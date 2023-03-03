import React, { useState, useRef } from "react";

const ShowAlert = () => {
  const inputRef = useRef();
  const [message, showMessage] = useState("");

  const handleClick = () => {
    const input = inputRef.current.value;
    console.log(input);
    showMessage(() => alert(`Your name is ${input}`));
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <br></br>
      <button onClick={handleClick}> Click to show alert</button>
    </div>
  );
};

export default ShowAlert;
