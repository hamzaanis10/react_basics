import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import ShowAlert from "./components/Hooks/showAlert";
// import Task1 from "./components/Hooks/Task1";
// import Task2 from "./components/Hooks/Task2";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
// import ReducerPractice from "./components/Hooks/useReducer";

function App() {
  const [textInput, settextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  // console.log(tweets);
  const author = "Hamza";
  return (
    <div className="container">
      <h1 className="text-center my-5">Twitter Bot</h1>
      {/* <ReducerPractice></ReducerPractice> */}
      <TweetList
        author={author}
        tweets={tweets}
        setTweets={setTweets}
      ></TweetList>
      <CreateTweet
        textInput={textInput}
        settextInput={settextInput}
        tweets={tweets}
        setTweets={setTweets}
      ></CreateTweet>
      {/* <ShowAlert></ShowAlert> */}
      {/* <Task1></Task1> */}
      {/* <Task2></Task2> */}
    </div>
  );
}

export default App;
