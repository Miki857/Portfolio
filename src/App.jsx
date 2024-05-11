import { useState } from 'react'
import './App.css'
import './normalize.css'
import './atributtes.css'
import Header from './components/Header'
import MainPersonal from './components/MainPersonal'
import MainSkills from './components/MainSkills'
import MainProyects from './components/MainProyects'
import MainEducation from './components/MainEducation'
import MainResume from './components/MainResume'

function App() {

    return (
      <>
        {/* HEADER */}
        <Header/>
        <MainPersonal/>
        <MainSkills/>
        <MainProyects/>
        <MainEducation/>
        <MainResume/>
      </>
    )
}

export default App
