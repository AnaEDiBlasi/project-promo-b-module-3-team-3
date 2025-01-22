import '../styles/App.scss';
import adalab from '../images/adalab.png';
//import avatar from '../images/avatar.webp';
//import ebook from '../images/ebook-example.jpg';
import laptop from '../images/laptop-code-solid.svg';
//import github from '../images/icons/github.svg';
//import globe from '../images/icons/globe-solid.svg';


function App() {
  return (
    <>
     <div className="container">

<header className="header">
  <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
    <img className="header__companyLogo" src={laptop} alt="Logo proyectos molones"/>
    <h1 className="header__title">Proyectos molones</h1>
  </a>
  <img className="logoSponsor" src= {adalab} alt="Logo Adalab"/>
</header>

<main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

  <section className="preview">
    <div className="projectImage"></div>
    <article className="card">
      <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

      <div className="card__author">
        <div className="card__authorPhoto"></div>
        <p className="card__job">
          Full stack Developer
        </p>
        <h3 className="card__name">Emmelie Bjôrklund</h3>
      </div>
  
      <div className="card__project">            
        <h3 className="card__name">Elegant Workspace</h3>
        <p className="card__slogan">Diseños Exclusivos</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">React JS - HTML - CSS</p>
      
          <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online">
            Web link
          </a>
          <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
            GitHub link
          </a>
        </div>
      </div>
    </article>
  </section>
  <form className="addForm">
    <h2 className="title">Información</h2>
    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
      <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"/>
      <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
      <div className="addForm__2col">
        <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"/>
        <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"/>
      </div>         
      <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"/>
      <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
    </fieldset>

    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre"/>
      <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"/>
    </fieldset>

    <fieldset className="addForm__group--upload">
      <label htmlFor="image" className="button">Subir foto del proyecto</label>
      <input className="addForm__hidden" type="file" name="image" id="image"/>
      <label htmlFor="photo" className="button">Subir foto de la autora</label>
      <input className="addForm__hidden" type="file" name="photo" id="photo"/>
      <button className="button--large">Guardar proyecto</button>
    </fieldset>
    
  </form>
</main>

<footer className="footer">
  <img className="logoSponsor" src={adalab} alt="Logo Adalab"/>
</footer>

</div>
    </>
  );
}
  

export default App;