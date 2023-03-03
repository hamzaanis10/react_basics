const Tweet = ({ author, tweet, setTweets, tweets }) => {
  const handleDelete = () => {
    setTweets(tweets.filter((del_tweet) => del_tweet.id !== tweet.id));
  };
  return (
    <div className="card m-5">
      <div className="card-header">{author}</div>
      <div className="card-body">
        <p className="card-text">{tweet.message}</p>
        <a onClick={handleDelete} to="#" className="btn btn-danger m-2">
          Delete
        </a>
        <a to="#" className="btn btn-primary">
          Like
        </a>
      </div>
    </div>
  );
};

export default Tweet;
