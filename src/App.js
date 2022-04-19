import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {useState} from "react"
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
function App() {
  const [component,setComponent]=useState("aboutMe")

  return (
    <div className="App">
     <Header setComponent={setComponent} component={component} />
     {component==="aboutMe"&& <AboutMe />}
     {component==="portfolio"&& <Portfolio />}
     {component==="contact"&& <Contact />}
     {component==="resume"&& <Resume />}
     <Footer />
    </div>
  );
}

export default App;
