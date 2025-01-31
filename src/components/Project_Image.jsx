import '../styles/App.scss';
import ebookExample from '../images/ebook-example.jpg'

function Project_Image(props) {
  return (
    <div className="projectImage">
      <img className="projectImage" src={props.image}/>
    </div>
    
  )
}

export default Project_Image