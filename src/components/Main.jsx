import '../styles/App.scss';
import Form from './Form';
import Preview from './Preview';

function Main() {
  return (
    <main className="main">
  <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
    <a className="button--link" href="./">Ver proyectos</a>
  </section>

 <Preview/>
 <Form/>

</main>
  )
}

export default Main