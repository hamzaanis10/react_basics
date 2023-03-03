import Tweet from "./Tweet";

const TweetList = ({ author, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          key={Math.random()}
          tweet={tweet}
          author={author}
          setTweets={setTweets}
          tweets={tweets}
        ></Tweet>
      ))}
    </div>
  );
};

export default TweetList;
