import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './main/Main';
import Landing from './Landing';
import { Route, Routes } from 'react-router-dom';
 
function App() {
 
  return (
    <>
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/form" element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;