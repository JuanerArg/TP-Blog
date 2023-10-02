import ComentCreator from "./ComentCreator";
import PostCreator from "./PostCreator";
import { useEffect, useState } from "react";

const PostPage = () => {

  const [Id, setId] = useState();
  const [Post, setPost] = useState([]);

  useEffect(() => {
    const jsonId = localStorage.getItem("Id");
    const json = localStorage.getItem("Post");
    if (json && jsonId) {
      const newPost = JSON.parse(json);
      setPost(newPost);
      const newId = JSON.parse(jsonId);
      setId(newId);
    }
  }, [])

  //console.log(id);
  const onlyPost = Post.filter((Post) => Post.id === Id)
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