import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "PavanKotha",
      caption: "Well, we are doing it",
      imageUrl:
        "https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg",
    },
    {
      username: "PavanKotha",
      caption: "No No No!!!",
      imageUrl:
        "https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.foottraffik.co/wp-content/uploads/2017/09/instagram-logo.png"
          alt=""
        ></img>
      </div>

      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}

      {/* post */}
      {/* post */}
    </div>
  );
}

export default App;
