import '../styles/App.scss';
import Form from './Form';
import Preview from './Preview';
import { useState } from 'react';
import ebookExample from '../images/ebook-example.jpg';
import avatar from '../images/avatar.webp';
import api from "../services/api";




function Main() {
  const [ projectUrl, setProjectUrl] = useState ("");
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
    photo: avatar
   })

   const updateAvatar = (urlImage, id) => {
    setFormData({...formData, [id]: urlImage});
   }
   
  const changeFormData = (input, value) =>{
    //formData.name = value;
    //formData[input] = value; //input hace referencia a todas las propiedades de formData
    // esto funciona porque input es el mismo nombre que la propiedad
    setFormData({...formData, [input]: value})

    // if (input === "name") {
    //   setFormData ({...formData, name: value});
    // } else if (input === "slogan") {
    //   setFormData ({...formData, slogan: value});
    // } else if (input === "technologies") {
    //   setFormData ({...formData, technologies: value});
    // } else if (input === "repo") {
    //   setFormData ({...formData, repo: value});
    // } else if (input === "demo") {
    //   setFormData ({...formData, demo: value});
    // } else if (input === "desc") {
    //   setFormData ({...formData, desc: value});
    // } else if (input === "autor") {
    //   setFormData ({...formData, autor: value});
    // } else {
    //   setFormData ({...formData, job: value});
    // }
   }

   

  return (
    <main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

 <Preview formData = {formData}/>
 <Form changeFormData = {changeFormData} updateAvatar={updateAvatar} formData = {formData} projectUrl = {projectUrl} setProjectUrl = {setProjectUrl}/>
 

</main>
  )
}

export default Main