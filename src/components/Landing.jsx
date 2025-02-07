import "../styles/Landing.scss";
import { Link } from "react-router-dom";
import Card from "./main/preview/Card";
import adalab from "../images/adalab.png";
import avatar from "../images/avatar.webp";

function Landing() {
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
  };

  return (
    <>
      <div className="Landing_container">
        <main className="Landing_main">
          <section className="Landing_intro">
            <h1 className="Landing_intro_title">Proyectos molones</h1>
            <p className="Landing_intro_text">
              Escaparate en línea para recoger ideas a través de la tecnología.
            </p>
          </section>
          <Link className="Landing_linkProject" to={"/form"}>
            NUEVO PROYECTO
          </Link>
          <section className="Landing_previewLanding">
            <Card formData={formData} />
            <Card formData={formData} />
          </section>
        </main>
      </div>
    </>
  );
}

export default Landing;
