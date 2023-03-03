const CreateTweet = ({ textInput, settextInput, tweets, setTweets }) => {
  const setInputHandler = (e) => {
    settextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweets([...tweets, { id: Math.random(), message: textInput }]);
    settextInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={textInput}
          onChange={setInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button className="btn btn-primary m-3">Post</button>
      </form>
    </div>
  );
};

export default CreateTweet;
