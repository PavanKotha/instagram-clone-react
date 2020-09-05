import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* header - Avatar, Username */}
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt={username}
        />
        <h3>
          <strong>{username}</strong>
        </h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      {/* Image */}

      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
      {/* Username, Caption */}
    </div>
  );
}

export default Post;
