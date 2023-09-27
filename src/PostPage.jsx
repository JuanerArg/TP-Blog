import ComentCreator from "./ComentCreator";
import PostCreator from "./PostCreator";
import { useEffect, useState } from "react";

const PostPage = () => {

    const [id, setId] = useState();
    const [Post, setPost] = useState([]);

    useEffect(() => {
      const newId =  localStorage.getItem("id");
      setId(newId);
      const json =  localStorage.getItem("Post");
      if(json){
        const newPost = JSON.parse(json);
        setPost(newPost);
      }
    },[])

    //console.log(id);
    const onlyPost = Post.filter((post) => post.id === id)
    return (
        <>  
            <h1>{onlyPost.length > 0 ? onlyPost.titulo : "Post no encontrado"}</h1>
            <p>{onlyPost.length > 0 ? onlyPost.parrafo : "Post no encontrado"}</p>
            <ComentCreator />
        </>

    )
}

export default PostPage