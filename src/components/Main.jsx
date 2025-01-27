import '../styles/App.scss';
import Form from './Form';
import Preview from './Preview';
import { useState } from 'react';

function Main() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: ""
   })

   
  const changeFormData = (input, value) =>{
    if (input === "name") {
      setFormData ({...formData, name: value});
    } else if (input === "slogan") {
      setFormData ({...formData, slogan: value});
    } else if (input === "technologies") {
      setFormData ({...formData, technologies: value});
    } else if (input === "repo") {
      setFormData ({...formData, repo: value});
    } else if (input === "demo") {
      setFormData ({...formData, demo: value});
    } else if (input === "desc") {
      setFormData ({...formData, desc: value});
    } else if (input === "autor") {
      setFormData ({...formData, autor: value});
    } else {
      setFormData ({...formData, job: value});
    }
   }

   

  return (
    <main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

 <Preview formData = {formData}/>
 <Form changeFormData = {changeFormData} />
 

</main>
  )
}

export default Main