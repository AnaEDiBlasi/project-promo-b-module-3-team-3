import '../styles/App.scss';
import Btn_Photo from './Btn_Photo';
import api from "../services/api";

function Form(props) {
  const handleChangeInput = (ev) =>{
    const input = ev.target.id;
    const value = ev.target.value;
    props.changeFormData(input, value);
  }

const handleClick = (ev) => {
  ev.preventDefault ();
  api (props.formData)
  .then ((resp) => {
    props.setProjectUrl (resp.cardURL);
    console.log (resp)

  } )
 

}


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
      <Btn_Photo  htmlFor="image" name="image" text="Subir foto del proyecto" id= "image" updateAvatar={props.updateAvatar}/>

      <Btn_Photo  htmlFor="photo" name="photo" text="Subir foto de la autora" id= "photo" updateAvatar={props.updateAvatar}/>

      <button className="button--large" onClick={handleClick} >Crear proyecto</button>
      {props.projectUrl ? <a href= {props.projectUrl}>Ver tarjeta</a> : null }
    </fieldset>
    
  </form>
    
  )
}

export default Form