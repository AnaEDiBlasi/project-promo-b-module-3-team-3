import "../../styles/main/Main.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./form/Form";
import Preview from "./preview/Preview";
import ebookExample from "../../../src/images/ebook-example.jpg";
import avatar from "../../../src/images/avatar.webp";


function Main() {
  const [projectUrl, setProjectUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: ebookExample,
    photo: avatar,
  });


   const updateAvatar = (urlImage, id,) => {
    setFormData({...formData, [id]: urlImage});
    
   }
   
  const changeFormData = (input, value) =>{
    setFormData({...formData, [input]: value})
   }

   const resetForm = () => {
    setFormData({
      name: "",
      slogan: "",
      technologies: "",
      repo: "",
      demo: "",
      desc: "",
      autor: "",
      job: "",
      image: ebookExample,
      photo: avatar
    });
  }
 
  return (
    <main className="Main_main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link className="button--link" to="/projects">
          Ver proyectos
        </Link>
      </section>

    <div className='Main_container-card'>
      <Preview formData = {formData}/>
      <Form 
      changeFormData = {changeFormData} 
      updateAvatar={updateAvatar} 
      formData = {formData} 
      projectUrl = {projectUrl} 
      setProjectUrl = {setProjectUrl}
      resetForm = {resetForm}
     />
    </div>
  </main>
  
  );
}

export default Main;
