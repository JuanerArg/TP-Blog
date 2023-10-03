import { useParams } from "react-router-dom"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useState, useEffect} from 'react'


const PostPage = () =>{
    let {id} = useParams();


    const [posts, setPost] = useState([])


    useEffect(() => {
      let jsonPost = localStorage.getItem("posts")
      if (jsonPost) {
        let newPost = JSON.parse(jsonPost);
        setPost(newPost);
        console.log(newPost)
        }
      },[])


      let post = posts.filter((elem, i) => i === id)
      console.log(post[0])


    return(
        <>
        <h1>{post[0].title}</h1>
        <Markdown remarkPlugins={[remarkGfm]}>{post[0].paragraph}</Markdown>
        </>
    )
}
export default PostPage