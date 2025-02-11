import '../../../styles/App.scss';

function Card(props) {
  
  return (
    <article className="card">
    <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

    <div className="card__author">
      <div className="card__authorPhoto">
        <img 
        className="card__authorPhoto" 
        src={props.formData.photo}/>
      </div>
      <p className="card__job"> {props.formData.job || "Full stack Developer"}
      
      </p>
      <h3 className="card__name"> {props.formData.autor ||"Emmelie Bjôrklund"}</h3>
    </div>

    <div className="card__project">            
      <h3 className="card__name">{props.formData.name || "Elegant Workspace"}</h3>
      <p className="card__slogan"> {props.formData.slogan || "Diseños Exclusivos"}</p>
      <h3 className="card__descriptionTitle">Product description</h3>
      <p className="card__description"> {props.formData.desc||"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>

      <div className="card__technicalInfo">
        <p className="card__technologies"> {props.formData.technologies || "React JS - HTML - CSS"}</p>
    
        <a className="icon icon__www" href={`https://${props.formData.demo}`} title="Haz click para ver el proyecto online"> Web link
        </a>
        <a className="icon icon__github" href={`https://${props.formData.repo}`} title="Haz click para ver el código del proyecto">GitHub link
        </a>
      </div>
    </div>
  </article>
  )
}

export default Card