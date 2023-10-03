import { useState } from 'react';
import { useEffect } from 'react';
import { Router, Route, Link, useParams } from 'react-router-dom';

function App() {

 const [posts, setPost] = useState([])

  useEffect(() => {
    let jsonPost = localStorage.getItem("posts")
    if (jsonPost) {
      let newPost = JSON.parse(jsonPost);
      setPost(newPost);
      console.log(newPost)
      }
    },[])

    return (
      <>
        <Link to="/create">Create a Post</Link>
        <ul>
        {
          posts.map((post, i) => (
              <li key={i}>
                <Link to={`/post/${i}`}>
                  <strong>{post.title}</strong>
                </Link>


              </li>
            )  
          )
        }
        </ul>
       
      </>
    )
}

export default App