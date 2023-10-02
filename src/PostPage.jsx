import ComentCreator from "./ComentCreator";
import PostCreator from "./PostCreator";
import { useEffect, useState } from "react";

const PostPage = () => {

  const [id, setId] = useState();
  const [Post, setPost] = useState([]);

  useEffect(() => {
    const newId = parseInt(localStorage.getItem("id"));
    setId(newId);
    const json = localStorage.getItem("Post");
    if (json) {
      const newPost = JSON.parse(json);
      setPost(newPost);
    }
  }, [])

  //console.log(id);
  const onlyPost = Post.filter((post) => post.id === id)
  const post = onlyPost[0];
  return (
    <>
      <h1>{post ? post.titulo : "Post no encontrado"}</h1>
      <p>{post ? post.parrafo : "Post no encontrado"}</p>
      <ComentCreator />
    </>

  )
}

export default PostPage