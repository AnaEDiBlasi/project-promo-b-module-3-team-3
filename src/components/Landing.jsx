import '../styles/Landing.scss';
import adalab from '../images/adalab.png';
import avatar from '../images/avatar.webp';
import Card from './main/preview/Card';
import { Link } from 'react-router-dom';

function Landing () {
    const formData = {
      name: "",
      slogan: "",
      technologies: "",
      repo: "",
      demo: "",
      desc: "",
      autor: "",
      job: "",
      image: adalab,
      photo: avatar,
    }

    return (
      <> 
      <div className="container">
        <main className="main">
          <section className="intro">
            <h1 className="intro_title">Proyectos molones</h1>
            <p className="intro_text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
          </section>
          <Link className="linkProject" to={"/form"}>NUEVO PROYECTO</Link>
          <section className="previewLanding">
            <Card formData = {formData}/>
            <Card formData = {formData}/>
          </section>
        </main>
      </div> 
      </>
    );
}

export default Landing;