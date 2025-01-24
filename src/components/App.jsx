import '../styles/App.scss';
//import avatar from '../images/avatar.webp';
//import ebook from '../images/ebook-example.jpg';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
//import github from '../images/icons/github.svg';
//import globe from '../images/icons/globe-solid.svg';
 
function App() {
 const [formData, setFormData] = useState({
  name: "",
  slogan: "",
  technologies: "",
  repo: "",
  demo: "",
  desc: "",
  autor: "",
  job: "",
  image: "",
  photo: ""
 })



const handleChangeInput = (ev) =>{
  const input = ev.target.id;
  const value = ev.target.value;

  // if (input === "name") {
  //   setName (value);
  // } else if (input === "slogan") {
  //   setSlogan (value);
  // } else if (input === "technologies") {
  //   setTechnologies (value);
  // } else if (input === "repo") {
  // setRepo (value);
  // } else if (input === "demo") {
  // setDemo (value);
  // } else if (input === "desc") {
  // setDesc (value);
  // } else if (input === "autor") {
  // setAutor (value);
  // } else {
  // setJob (value);
  // }
 }
  return (
    <>
     <div className="container">

    <Header/>

    <Main  data = {formData}/>

    <Footer/>

   </div>
    </>
  );
}


export default App;