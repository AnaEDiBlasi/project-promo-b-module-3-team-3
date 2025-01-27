import '../styles/App.scss';
//import avatar from '../images/avatar.webp';
//import ebook from '../images/ebook-example.jpg';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
//import github from '../images/icons/github.svg';
//import globe from '../images/icons/globe-solid.svg';
 
function App() {
 
  return (
    <>
     <div className="container">

    <Header/>

    <Main/>

    <Footer/>

   </div>
    </>
  );
}


export default App;