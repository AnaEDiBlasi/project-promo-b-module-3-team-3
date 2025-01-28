import '../styles/Landing.scss';
import adalab from '../images/adalab.png';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import App from './App';
import { Link } from 'react-router-dom'


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
      image: "",
      photo: ""
    }

    return (
        <> 
        <div className="container">      
        <Header/>

      <main className="main">
        <section className="intro">
          <h1 className="intro_title">Proyectos molones</h1>
          <p className="intro_text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
        </section>
        <a className="linkProject" href="">NUEVO PROYECTO</a>
        {/* <a className="linkProject"><Link to={"./Dashboard"}>NUEVO PROYECTO</Link></a>
        <Link className="linkProject" to={"./Dashboard"}>NUEVO PROYECTO</Link> */}
        
        <section className="previewLanding">
          <Card formData = {formData}/>
          <Card formData = {formData}/>
        </section>
        
      </main>
      <Footer/>
          </div> 
    </>
    );

}
export default Landing;