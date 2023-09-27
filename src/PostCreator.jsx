import { useState, useEffect } from "react";
const PostCreator = () => {
  const [Post, setPost] = useState([]);
  const [Titulo, setTitulo] = useState("");
  const [Parrafo, setParrafo] = useState("");
  const [id, setID] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem("Posts");
    if (json) {
      const newPost = JSON.parse(json);
      setPost(newPost);
    }
  }, [])

  const handleTitle = (e) => {
    setTitulo(e.target.value);
  };

  const handleParagraph = (e) => {
    setParrafo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPost = { id: id, titulo: Titulo, parrafo: Parrafo };
    const newPost = [...Post, nuevoPost];
    setPost(newPost)
    localStorage.setItem("Posts", JSON.stringify(newPost));
    setTitulo("");
    setParrafo("");
    setID(id + 1);
    console.log(Post);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={Titulo}
          onChange={handleTitle}
          type="text"
          placeholder="Title"
        ></input>

        <input
          value={Parrafo}
          onChange={handleParagraph}
          type="text"
          placeholder="Paragraph"
        ></input>
        <input type="submit" value="ingresar" hidden />
      </form>
    </>
  );
};

export default PostCreator;