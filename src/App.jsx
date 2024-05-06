import { useState } from 'react'
import './App.css'
import './normalize.css'
import './atributtes.css'
import Header from './components/Header'
import MainPersonal from './components/MainPersonal'
import MainTopLanguages from './components/MainTopLanguages'
import MainSkills from './components/MainSkills'
import MainProyects from './components/MainProyects'
import MainEducation from './components/MainEducation'
import MainResume from './components/MainResume'

function App() {
    const [page, setPage] = useState("Resume");

    function toRender() {
      switch(page){
        case "Main":
          return renderHome();
        case "Skills":
          return renderSkills();
        case "Proyects":
          return renderProyects();
        case "Education":
          return renderEducation();
        case "Resume":
          return renderResume();
      }
    }

    function renderHome() {
      return(
        <>
          {/* MAIN HOME */}
          <main className='main mainPersonal flex flex-column justify-center align-center gap-02'>
            <MainPersonal/>
            <MainTopLanguages/>
          </main>
        </>
      );
    }

    function renderSkills() {
      return(
        <>
          {/* MAIN SKILLS */}
          <main className='main mainSkills flex flex-column justify-center align-center gap-02'>
            <MainSkills/>
          </main>
        </>
      );
    }

    function renderProyects() {
      return(
        <>
          {/* MAIN PROYECTS */}
          <main className='main mainProyects flex flex-column justify-center align-center gap-02'>
            <MainProyects/>
          </main>
        </>
      );
    }

    function renderEducation() {
      return(
        <>
          {/* MAIN EDUCATION */}
          <main className='main mainEducation flex flex-column justify-center align-center gap-02'>
            <MainEducation/>
          </main>
        </>
      );
    }

    function renderResume() {
      return(
        <>
          {/* MAIN RESUME */}
          <main className='main mainResume flex flex-column justify-center align-center gap-02'>
            <MainResume/>
          </main>
        </>
      );
    }

    return (
      <>
        {/* HEADER */}
        <Header
          setPage={setPage}
        />  
        {toRender()}
      </>
    )
}

export default App
