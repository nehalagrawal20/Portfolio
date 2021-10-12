import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import EducationPage from './pages/Education';
import SkillsPage from './pages/Skills';
import ProjectPage from './pages/Projects';
import ExperiencePage from './pages/Experience';
import ExperimentPage from './pages/Experiments';
import ContactPage from './pages/Contact';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <AboutPage />
            </Route>
            <Route path="/education" exact>
              <EducationPage />
            </Route>
            <Route path="/skills" exact>
              <SkillsPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectPage />
            </Route>
            <Route path="/experience" exact>
              <ExperiencePage />
            </Route>
            <Route path="/experiments" exact>
              <ExperimentPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
