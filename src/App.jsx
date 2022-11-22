import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import './styles/sections.css'

//Componentes estructurales
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Secciones de la página
import AboutMe from './components/Sections/AboutMe/AboutMe'
import SoftSkills from './components/Sections/SoftSkills/SoftSkills'
import HardSkills from './components/Sections/HardSkills/HardSkills'
import Projects from './components/Sections/Projects/Projects'

//Componentes de utilidad
import Loader from './components/Utils/Loader/Loader'


function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    (loaded)
      ?
      <div id="page" className='flex flex-col justify-between'>
        {/* <div className='h-full mb-10 space-y-10 overflow-hidden'> */}
        <Header />
        {/* </div> */}
        <main className=''>
          <AboutMe />
          <SoftSkills />
          <HardSkills />
          <Projects />
        </main>
        <Footer />
      </div>
      :
      <div className='flex h-screen -mt-20'>
        <Loader />
      </div>
  )
}

export default App
