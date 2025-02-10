import "../../../styles/main/form/Form.scss";
import { useState } from "react";
import api from "../../../services/api";
import Btn_Photo from "./Btn_Photo";

function Form(props) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const handleChangeInput = (ev) =>{
    const input = ev.target.id;
    const value = ev.target.value;
    props.changeFormData(input, value);
    setLocalError(""); // Limpia el error al escribir
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    setError("");

    api(props.formData)
      .then((resp) => {
        props.setProjectUrl(resp.cardURL);
      })
      .catch((err) => {
        console.error("Error al crear proyecto:", err);
        setError("Error al crear proyecto. Inténtalo de nuevo.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleChangeInput}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleChangeInput}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleChangeInput}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleChangeInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={handleChangeInput}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleChangeInput}
        />
      </fieldset>

    <fieldset className="addForm__group--upload">
      <div>
        <Btn_Photo  
        htmlFor="image" 
        name="image" 
        text="Subir foto del proyecto" 
        id= "image" 
        updateAvatar={props.updateAvatar}/>
        <p className="form-message">* Tamaño máximo de las fotos: 25MB</p>
      </div>
      <div>
        <Btn_Photo  
        htmlFor="photo" 
        name="photo" 
        text="Subir foto de la autora" 
        id= "photo" 
        updateAvatar={props.updateAvatar}/>
        <p className="form-message">* Tamaño máximo de las fotos: 5MB</p>
      </div>

      <button
          className="button--large"
          onClick={handleClick}
          
        >
        {isLoading ? "Creando..." : "Crear proyecto"}
        </button>
         <button type="reset" className="button" onClick={props.resetForm}>
          Resetear formulario
        </button>
        {props.projectUrl && <a className="button" href={props.projectUrl}> Ver tarjeta</a>}
    </fieldset>
    
  </form>
    
  )
}

export default Form;
