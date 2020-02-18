// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({comments}) => {
  // Add state for the comments

  const [data] = useState(comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data.map( comment =>(
      <CommentInput comment ={comment}/>
      ))}
    </div>
  );
};

export default CommentSection;
