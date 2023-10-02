import { useState, useEffect } from "react";
const PostCreator = () => {
  const [Post, setPost] = useState([]);
  const [Titulo, setTitulo] = useState("");
  const [Parrafo, setParrafo] = useState("");
  const [id, setID] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem("Post");
    const jsonId = localStorage.getItem("Ids");
    if (json && jsonId) {
      const newPost = JSON.parse(json);
      const newId = JSON.parse(jsonId);
      setID(newId);
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
    setPost(newPost);
    localStorage.setItem("Post", JSON.stringify(Post));
    let newId = id + 1;
    setID(newId)
    localStorage.setItem("Ids", JSON.stringify(id));
    setTitulo("");
    setParrafo("");
    console.log(Post);
    console.log(id)
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