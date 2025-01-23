import '../styles/App.scss';
import adalab from '../images/adalab.png';


function Landing () {
    return (
        <> 
        <div className="container">      
        <header className="header">
        <a href="./">
          <div className="header_left">
            <i className="fa-solid fa-cat fa-2xl header_left-icon" aria-hidden="true"></i>
            <h1 className="header_left-text">Proyectos molones</h1>
          </div>
        </a>
        <img className="header_logo"
          src={adalab}
          alt="Logo Adalab"/>
      </header>
      <main className="main">
        <section className="intro">
          <h1 className="intro_title">Proyectos molones</h1>
          <p className="intro_text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
        </section>
        <a className="linkProject" href="#/">
          <button className="linkProject_project-btn">Ver Proyectos</button> 
        </a>
        <section className="preview">
          <div className="preview_image" style="background-image: url('./images/project.jpg');"></div>
          <article className="preview_autor">
            <section className="infoProject">
              <div className="infoProject_container">
                <hr className="infoProject_container-line1"/>
                <p className="infoProject_container-subtitle">Personal Project Card</p>
                <hr className="infoProject_container-line2"/>
              </div>
              <h2 className="infoProject_title">Elegant Workspace</h2>
              <p className="infoProject_slogan">Diseños Exclusivos</p>
              <p className="infoProject_desc">Gestión de proyectos en línea, diseñado para simplificar y agilizar tu
                trabajo como programadora. Con solo crear una tarjeta para cada proyecto, podrás organizarlos de manera
                eficiente. ¡Optimiza tu productividad y alcanza tus metas de manera efectiva con nosotras!</p>
              <section className="technologies">
                <p className="technologies_text">React JS - HTML - CSS</p><button src="" target="_blank"
                  className="technologies_icon"><i className="fa-solid fa-globe technologies_icon-img"
                    aria-hidden="true"></i></button><button src="" target="_blank" className="technologies_icon"><i
                    className="fa-brands fa-github technologies_icon-img" aria-hidden="true"></i></button>
              </section>
            </section>
            <section className="infoAutor">
              <div className="infoAutor_image" style="background-image: url({&quot;/assets/avatar-a91e8c67.png&quot;});"></div>
              <p className="infoAutor_job">Full Stack Developer</p>
              <p className="infoAutor_name">Emmelie Björklund</p><button className="btn"></button>
            </section>
          </article>
        </section>
        <section className="form"><i className="fa-regular fa-trash-can fa-2xl form_trash" aria-hidden="true"></i>
          <h2 className="form_title">Información</h2>
          <section className="form_askInfo">
            <div className="form_askInfo_container">
              <p className="form_askInfo_container-subtitle">Cuéntanos sobre el proyecto</p>
              <hr className="form_askInfo-line"/>
            </div>
          </section>
          <fieldset className="form_project"><input className="form_project-input" type="text" placeholder="Nombre del proyecto *"
              name="name" id="name" required="" value=""/>
            <p className="error"></p><input className="form_project-input" type="text" name="slogan" id="slogan"
              placeholder="Slogan *" required="" value=""/>
            <p className="error"></p><input className="form_project-input" type="text" name="repo" id="repo" placeholder="Repo *"
              required="" value=""/>
            <p className="error"></p><input className="form_project-input" type="text" placeholder="Demo *" name="demo" id="demo"
              required="" value=""/>
            <p className="error"></p><input className="form_project-input" type="text" placeholder="Tecnologías *"
              name="technologies" id="technologies" required="" value=""/>
            <p className="error"></p><textarea className="form_project-textarea" type="text"
              placeholder="Descripción * (Máx. 300 caracteres)" name="desc" id="desc" required=""></textarea>
            <p className="error"></p>
          </fieldset>
          <section className="form_askInfo">
            <p className="form_askInfo-autor">Cuéntanos sobre la autora</p>
            <hr className="form_askInfo-line"/>
          </section>
          <fieldset className="form_project"><input className="form_project-input" type="text" placeholder="Nombre *" name="autor"
              id="autor" required="" value=""/>
            <p className="error"></p><input className="form_project-input" type="text" placeholder="Trabajo *" name="job" id="job"
              required="" value=""/>
            <p className="error"></p>
          </fieldset>
          <section className="form_btn">
            <div className="form_btn-first"><label className="form_btn-first-upload">Subir foto del proyecto<input type="file"
                  style="display: none;"/></label><label className="form_btn-first-upload">Subir foto de la autora<input
                  type="file" style="display: none;"/></label></div>
            <p className="error"></p>
            <p className="error"></p>
            <div><button className="form_btn-create">Crear Tarjeta</button></div>
          </section>
          <section className="form_card hidden"><span className="form_card-msg"> La tarjeta ha sido creada:</span><a href=""
              className="form_card-link" target="_blank" rel="noreferrer"></a></section>
        </section>
      </main>
      <footer className="footer"><img className="footer_img"
          src={adalab}
          alt="Logo Adalab"/></footer>
          </div> 
    </>
    );

}
export default Landing;