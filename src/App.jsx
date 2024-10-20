import React, { useState, useEffect } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    if (savedComments) {
      setComments(savedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div>
      <h1>Comentários</h1>
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
      <p>Total de comentários: {comments.length}</p>
    </div>
  );
}

export default App;
