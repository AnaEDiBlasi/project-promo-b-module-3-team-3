import '../styles/App.scss';
import adalab from '../images/adalab.png';
import laptop from '../images/laptop-code-solid.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link 
        className="header__brand" 
        to="/" 
        title="Haz click para volver a la página inicial"
        aria-label="Volver a la página inicial"
      >
        <img className="header__companyLogo" src={laptop} alt="Logo proyectos molones" />
        <h1 className="header__title">Proyectos Molones</h1>
      </Link>
      <img className="logoSponsor" src={adalab} alt="Logo Adalab" />
    </header>
  );
}

export default Header;
