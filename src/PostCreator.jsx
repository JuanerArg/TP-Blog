import { useState, useEffect } from "react";

const PostCreator = () => {
  const [Titulo, setTitulo] = useState("");
  const [Parrafo, setParrafo] = useState("");
  const [id, setID] = useState(0);

  const handleNewPost = localStorage.getItem("handleNewPost");

  const handleTitle = (e) => {
    setTitulo(e.target.value);
  };

  const handleParagraph = (e) => {
    setParrafo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPost = { id: id, titulo: Titulo, parrafo: Parrafo };
    handleNewPost(nuevoPost);
    setTitulo("");
    setParrafo("");
    setID(id + 1);
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
