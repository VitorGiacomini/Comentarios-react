import React from 'react';

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <p><strong>{comment.author}</strong> comentou:</p>
          <p>{comment.text}</p>
          <p><small>{comment.date}</small></p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
