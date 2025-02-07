import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./main/Main";
import Landing from "./Landing";

function App() {
  return (
    <>
      <div className="App_container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
