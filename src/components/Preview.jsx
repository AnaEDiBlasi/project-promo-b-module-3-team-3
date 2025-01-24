import '../styles/App.scss';
import Card from './Card';
import Project_Image from './Project_Image';

function Preview(props) {
  return (
    <section className="preview">
   
    <Project_Image photoUrl = {props.data.photo} />
    <Card data = {props.data}/>
    
  </section>
    
  )
}

export default Preview