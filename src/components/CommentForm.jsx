import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && text) {
      const newComment = {
        author,
        text,
        date: new Date().toLocaleString(),
      };
      onAddComment(newComment);
      setAuthor('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Escreva seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Comentar</button>
    </form>
  );
}

export default CommentForm;
