import { useState, useEffect } from "react";

const PostCreator = () => {

  const [posts, setPosts] = useState(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    return storedPosts || [];
  });

  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id,
      title,
      paragraph
    };

    setPosts(prevPosts => [...prevPosts, newPost]);

    setTitle('');
    setParagraph('');
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        value={title}
        onChange={handleTitleChange}
      />

      <input
        value={paragraph}
        onChange={handleParagraphChange}
      />

      <button type="submit">Submit</button>

    </form>
  );
};

export default PostCreator;