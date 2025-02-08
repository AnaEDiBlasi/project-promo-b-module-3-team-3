import '../../../styles/App.scss';
import Btn_Photo from './Btn_Photo';
import api from "../../../services/api";
import { useState } from 'react';

function Form(props) {
  const [localError, setLocalError] = useState(""); // Estado local para el error
  const [isLoading, setIsLoading] = useState(false); // Estado para la carga

  const handleChangeInput = (ev) =>{
    const input = ev.target.id;
    const value = ev.target.value;
    props.changeFormData(input, value);
    setLocalError(""); // Limpia el error al escribir
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    const { name, repo, demo, autor, desc } = props.formData; 
    if (!name || !repo || !demo || !autor || !desc) { 
      setLocalError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setLocalError(""); // Limpia el error si la validación pasa
    setIsLoading(true); // Indica que la llamada está en curso

  
    api(props.formData)
    .then((resp) => {
      console.log("✅ Respuesta de la API en Form.js:", resp);
      if (resp.success) {
        props.setProjectUrl(resp.cardURL);
      } else {
        // Intenta obtener el mensaje de error específico de la API
        const errorMessage = resp.error || "Error desconocido en la API";
        throw new Error(errorMessage); // Lanza un error con el mensaje específico
      }
    })
    .catch((err) => {
      console.error("❌ Error en el formulario:", err);
      // Muestra el mensaje de error específico o uno genérico
      setLocalError(err.message || "Hubo un error al crear el proyecto. Inténtalo de nuevo.");
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
      <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChangeInput}/>
      <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} />
      <div className="addForm__2col">
        <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"onChange={handleChangeInput}/>
        <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"onChange={handleChangeInput}/>
      </div>         
      <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"onChange={handleChangeInput}/>
      <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput}></textarea>
    </fieldset>

    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} />
      <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} />
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
          disabled={isLoading || !props.formData.name || !props.formData.repo || !props.formData.demo || !props.formData.autor || !props.formData.desc}
        >
          {isLoading ? "Creando..." : "Crear proyecto"}
        </button>
        {localError && <p className="error-message">{localError}</p>} {/* Usa localError */}
        {props.projectUrl && <a href={props.projectUrl}>Ver tarjeta</a>}
      </fieldset>
    </form>
    
  )
}

export default Form