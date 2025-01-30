import '../styles/App.scss';

function Project_Image(props) {
  return (
    <div className="projectImage">
      <img className="projectImage" src={props.photoUrl}/>
    </div>
    
  )
}

export default Project_Image